import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup, Text, Button, Icon } from '@rneui/base';
import { showDeleteConfirmation } from '../../../../global/tools/show-alert';
import { ITransactionEntry } from '../../types/definitions';
import { TransactionEntryContext } from '../../contexts/Contexts';
import { useNavigation } from '@react-navigation/native';


type Props = {
    item: ITransactionEntry;
  };
  
  const EntrySectionListItem: React.FC<Props> = ({ item }) => {
    const transactionEntryContext = useContext(TransactionEntryContext);
    const navigation = useNavigation();
    const { deleteEntry } = transactionEntryContext!;
  
    const showDeleteConfirmation = (
      title: string,
      message: string,
      id: number,
      deleteEntry: (id: number) => void
    ) => {
      // Implement your confirmation logic here
    };
  
    return (
      <View style={styles.inputContainerStyle}>
        <Text style={{ fontSize: 18 }}>First Name: {item.firstName}</Text>
        <Text style={{ fontSize: 18 }}>Surname: {item.surName}</Text>
        <Text style={{ fontSize: 18 }}>Middle Name: {item.middleName}</Text>
        <Text style={{ fontSize: 18 }}>Date of Birth: {item.dateOfBirth}</Text>
        <Text style={{ fontSize: 18 }}>Home Address: {item.homeAddress}</Text>
        <Text style={{ fontSize: 18 }}>Date of Registration: {item.dateOfRegistration}</Text>
        <Text style={{ fontSize: 18 }}>Matriculation Number: {item.matriculationNumber}</Text>
        <ButtonGroup
          containerStyle={{ backgroundColor: 'white', width: '40%', borderColor: 'skyblue' }}
          buttons={[
            <Button
              icon={<Icon name="edit" color="pink" />}
              type="clear"
              title="Edit"
              titleStyle={{ fontSize: 15 }}
              onPress={() => navigation.navigate('EditEntryScreen', { transactionEntryToEdit: item })}
            />,
            <Button
              icon={<Icon name="delete" color="red" />}
              type="clear"
              title="Delete"
              titleStyle={{ fontSize: 15 }}
              onPress={() => {
                showDeleteConfirmation(
                  'About to Delete',
                  'Are you sure that you want to delete this entry?',
                  item.id!,
                  deleteEntry
                );
              }}
            />,
          ]}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    inputContainerStyle: {
      width: '100%',
      padding: 9,
    },
  });
  
  export default EntrySectionListItem;
  