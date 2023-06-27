import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataSource, Repository } from 'typeorm';
import { TransactionEntry } from './entities/transaction-entry.entity';
import { Text, Button } from '@rneui/base';
type Props = {
  dataSource: DataSource;
}
const TransactionEntryHome: React.FC<Props> =
  ({
    dataSource }) => {    //As usual, we need to state manage  
    const [transactionEntries, setTransactionEntries] = useState<TransactionEntry[]>([]);    //prepare the function that will getTransactionEntries   
    const getTransactionEntries = async () => {
      try {
        const transactionEntryRepository: Repository<TransactionEntry> = dataSource.getRepository(TransactionEntry);
        let transactionEntries = await transactionEntryRepository.find();            //Below really should not be here. It is just to load some fictitious data for quick test of our data source.           
        if (transactionEntries.length === 0) {
          const newTransactionEntry = new TransactionEntry();
          newTransactionEntry.description = 'Just a sample entry';
          newTransactionEntry.amount = 1000;
          await transactionEntryRepository.save(newTransactionEntry);
          transactionEntries = await transactionEntryRepository.find();
        }
        setTransactionEntries(transactionEntries);
      }
      catch (error) {
        setTransactionEntries([]); //None available due to error      
      }
    }
    useEffect(() => {
      getTransactionEntries(); //run once    
    }, [])
    return (
      <SafeAreaView style={styles.container}>
        <Text h2>My Personal Transactions</Text>
        <FlatList
          style={{ width: '100%', padding: 10 }}
          data={transactionEntries}
          renderItem={({ item }) => (
            <View style={styles.inputContainerStyle}>
              <Text>Id={item.id}</Text>
              <Text>Date={new Date(item.txnYear!, item.txnMonth!, item.txnDay!).toLocaleDateString()}</Text>
              <Text>Income={item.expense ? "No" : "Yes"}</Text>
              <Text>Description={item.description}</Text>
              <Text>Amount={item.amount}</Text>
              <Button title="Delete" onPress={() => { }} />
            </View>)}
          ListHeaderComponent={
            () => (
              <View><Text h3 style={[styles.inputContainerStyle,
              { textDecorationLine: 'underline' }]}>
                Entries so far</Text></View>)
          }
          ListFooterComponent={() =>
          (<View style={{
            backgroundColor: '#ccc',
            paddingBottom: 30,
            paddingTop: 3,
            alignContent: "flex-start"
          }}>
            <Text style={{
              fontSize: 15,
              fontStyle: "italic"
            }}>Copyright: Pius Onobhayedo</Text></View>)} keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={
            //this component will be rendered in between items                    
            () => {
              return (<View style={{
                backgroundColor: '#ccc',
                height: 1,
                width: '100%'
              }} />)
            }}
        />
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  inputContainerStyle: {
    width: '100%',
    padding: 10
  }
});
export default TransactionEntryHome;