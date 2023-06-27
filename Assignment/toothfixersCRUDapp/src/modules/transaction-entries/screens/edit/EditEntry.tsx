import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TransactionEntryContext } from '../../contexts/Contexts';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TransactionEntry } from '../../entities/transaction-entry.entity';
import moment from 'moment';

type IState = {
  id:number;
  txnDay: number | null;
  txnMonth: number | null;
  txnYear: number | null;
  date: Date;
  firstName: string;
  surName: string;
  middleName: string;
  dateOfBirth: string;
  homeAddress: string;
  dateOfRegistration: string;
  matriculationNumber: string;
};

const EditEntry: React.FC = () => {
  const { updateEntry } = useContext(TransactionEntryContext)!;
  const route = useRoute<RouteProp<Record<string, { transactionEntryToEdit: TransactionEntry }>>>();
  const transactionEntryToEdit = route.params.transactionEntryToEdit;
  const navigation = useNavigation();

  const date = new Date();
  const [state, setState] = useState<IState>({
    txnid: transactionEntryToEdit.txnid,
    txnDay: transactionEntryToEdit.txnDay,
    txnMonth: transactionEntryToEdit.txnMonth,
    txnYear: transactionEntryToEdit.txnYear,
    date: new Date(transactionEntryToEdit.txnYear, transactionEntryToEdit.txnMonth, transactionEntryToEdit.txnDay),
    firstName: transactionEntryToEdit.firstName,
    surName: transactionEntryToEdit.surName,
    middleName: transactionEntryToEdit.middleName,
    dateOfBirth: transactionEntryToEdit.dateOfBirth,
    homeAddress: transactionEntryToEdit.homeAddress,
    dateOfRegistration: transactionEntryToEdit.dateOfRegistration,
    matriculationNumber: transactionEntryToEdit.matriculationNumber,
  });

  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text h3 style={styles.inputContainerStyle}>
          Edit displayed transaction
        </Text>
        <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
          {Platform.OS !== 'ios' && (
            <Button
              radius={6}
              title={moment(state.date).format('LL')}
              onPress={() => {
                setShowDatePicker(true);
              }}
            />
          )}
          {showDatePicker && (
            <DateTimePicker
              style={styles.inputContainerStyle}
              value={state.date}
              mode="date"
              display="default"
              onChange={(_event: any, selectedDate: any) => {
                const date: Date = selectedDate as Date;
                setState({
                  ...state,
                  date: selectedDate,
                  txnDay: date.getDate(),
                  txnMonth: date.getMonth(),
                  txnYear: date.getFullYear(),
                });
                setShowDatePicker(Platform.OS === 'ios');
              }}
            />
          )}
        </View>
        <Input
          label="First Name"
          value={state.firstName}
          placeholder="Enter your first name here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
          onChangeText={(firstName) => setState({ ...state, firstName })}
          style={styles.inputStyle}
        />
        <Input
          label="Surname"
          value={state.surName}
          placeholder="Enter your surname here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
          onChangeText={(surName) => setState({ ...state, surName })}
          style={styles.inputStyle}
        />
        <Input
          label="Middle Name"
          value={state.middleName}
          placeholder="Enter your middle name here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
          onChangeText={(middleName) => setState({ ...state, middleName })}
          style={styles.inputStyle}
        />
        <Input
          label="Date of Birth"
          value={state.dateOfBirth}
          placeholder="Enter your date of birth here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'calendar' }}
          onChangeText={(dateOfBirth) => setState({ ...state, dateOfBirth })}
          style={styles.inputStyle}
        />
        <Input
          label="Home Address"
          value={state.homeAddress}
          placeholder="Enter your home address here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'home' }}
          onChangeText={(homeAddress) => setState({ ...state, homeAddress })}
          style={styles.inputStyle}
        />
        <Input
          label="Date of Registration"
          value={state.dateOfRegistration}
          placeholder="Enter the date of registration here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'calendar' }}
          onChangeText={(dateOfRegistration) => setState({ ...state, dateOfRegistration })}
          style={styles.inputStyle}
        />
        <Input
          label="Matriculation Number"
          value={state.matriculationNumber}
          placeholder="Enter your matriculation number here"
          multiline
          inputContainerStyle={styles.inputContainerStyle}
          leftIcon={{ type: 'font-awesome', name: 'id-card' }}
          onChangeText={(matriculationNumber) => setState({ ...state, matriculationNumber })}
          style={styles.inputStyle}
        />
        <View style={{ flexDirection: 'row' }}>
          <Button
            style={[styles.inputContainerStyle, { paddingRight: 1 }]}
            title="Save"
            onPress={() => {
              const { date, ...updatedTransactionEntryData } = state;
              updateEntry(updatedTransactionEntryData, navigation);
            }}
          />
          <Button
            style={[styles.inputContainerStyle, { paddingLeft: 1 }]}
            title="Cancel"
            onPress={() => {
              navigation.goBack();
            }}
            buttonStyle={{ backgroundColor: 'orange' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffff2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 18,
  },
  inputContainerStyle: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fffff2',
  },
  inputStyle: {
    backgroundColor: '#F2F3F5',
    borderRadius: 6,
    height: '100%',
    padding: 6,
  },
});

export default EditEntry;
