import React, { useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
/**
* Type for props to be passed by App when mounting AddEntry
*/
type Props = {
 createEntry: Function,
 cancelCreateEntry: Function
}

/**
 * Type for state variable for the form
 */
type IState = {
    txnDay: number | null;
    txnMonth: number | null;
    txnYear: number | null;
    date: Date;
    description: string;
    amount: number;
    expense: boolean
   }

   const AddEntry: React.FC<Props> = ({ createEntry, cancelCreateEntry }) => {
    const date = new Date(); // for initializing all the dates.
    const [state, setState] = useState<IState>({
    txnDay: date.getDay(),
    txnMonth: date.getMonth(),
    txnYear: date.getFullYear(),
    date: new Date(),
    description: '',
    amount: 0,
    expense: true
    })

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);
    const navigation = useNavigation();
    
    return (
        <ScrollView>
          <View style={styles.container}>
            <Text h3 style={styles.inputContainerStyle}>
              Make new transaction entry
            </Text>
            {/* Only show button below if the OS is not iOS. iOS DateTimePicker is visible by default */}
            <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
            {Platform.OS !== "ios" && <Button style={styles.inputContainerStyle}
                title="Select Date"
                onPress={() => {
                setShowDatePicker(true);
                }}
                />}
              {showDatePicker && (
                <DateTimePicker
                  style={styles.inputContainerStyle}
                  value={state.date}
                  mode={'date'}
                  //is24Hour={true}
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
                    setShowDatePicker(Platform.OS === 'ios' ? true : false);
                  }}
                />
              )}
            </View>
      
            <Input
              label="Description"
              placeholder="Enter brief transaction description here"
              multiline
              inputContainerStyle={styles.inputContainerStyle}
              leftIcon={{ type: 'font-awesome', name: 'comment' }}
              onChangeText={(description) => setState({ ...state, description })}
            />
            <Input
              label="Amount"
              placeholder="Enter amount here"
              keyboardType="numeric"
              inputContainerStyle={styles.inputContainerStyle}
              leftIcon={{ type: 'font-awesome', name: 'money' }}
              onChangeText={(amount) => setState({ ...state, amount: +amount })}
            />
      
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.inputContainerStyle, styles.buttonContainer]}>
                <Button
                  title="Submit"
                  onPress={() => {
                    //call create which will also make the form disappear
                    createEntry(state);
                  }}
                />
              </View>
              <View style={[styles.inputContainerStyle, styles.buttonContainer]}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    //call create which will also make the form disappear
                    navigation.goBack();
                  }}
                  buttonStyle={{ backgroundColor: 'orange' }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      );
}      
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fffff2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30
    },
    inputContainerStyle: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fffff2'
    },
    buttonContainer: {
        flex: 1,
        paddingRight: 1,
        paddingLeft: 1,
      }
   });
   export default AddEntry;