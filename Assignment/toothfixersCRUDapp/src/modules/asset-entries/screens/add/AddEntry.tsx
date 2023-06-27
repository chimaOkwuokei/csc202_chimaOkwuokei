import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker'; //installation required
import { AssetEntryContext } from '../../contexts/Contexts';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

/**
 * Type for state variable for the form
 */
type IState = {
    id: number,
    acquireDay: number | null;
    acquireMonth: number | null;
    acquireYear: number | null;
    date: Date;
    clinicDate: string;
    natureOfAilment: string;
    medicinePrescribed: string;
    procedureUndertaken: string;
    dateOfNextAppointment: string;
}

const AddEntry: React.FC = () => {

    const { createEntry } = useContext(AssetEntryContext)!;

    const navigation = useNavigation();

    const date = new Date(); // for initializing all the dates.
    const [state, setState] = useState<IState>({
        clinicDate: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        dateOfNextAppointment: '',
    })

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);

    return (
        <ScrollView>
          <View style={styles.container}>
            <Text h3 style={styles.inputContainerStyle}>
              Edit clinic records
            </Text>
        <Input
        label="First Name"
        value={state.clinicDate}
        placeholder="Enter your first name here"
        multiline
        inputContainerStyle={styles.inputContainerStyle}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={(clinicDate) => setState({ ...state, clinicDate })}
        style={styles.inputStyle}
      />
      <Input
        label="Nature of Ailment"
        value={state.natureOfAilment}
        placeholder="Enter your natureOfAilment here"
        multiline
        inputContainerStyle={styles.inputContainerStyle}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={(natureOfAilment) => setState({ ...state, natureOfAilment })}
        style={styles.inputStyle}
      />
      <Input
        label="Medicine Prescribed"
        value={state.medicinePrescribed}
        placeholder="Enter your medicine here"
        multiline
        inputContainerStyle={styles.inputContainerStyle}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={(medicinePrescribed) => setState({ ...state, medicinePrescribed })}
        style={styles.inputStyle}
      />
      <Input
        label="Procedure Undertaken"
        value={state.procedureUndertaken}
        placeholder="Enter your procedure here"
        multiline
        inputContainerStyle={styles.inputContainerStyle}
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={(procedureUndertaken) => setState({ ...state, procedureUndertaken })}
        style={styles.inputStyle}
      />
      <Input
        label="date of next appointment"
        value={state.dateOfNextAppointment}
        placeholder="Enter your home address here"
        multiline
        inputContainerStyle={styles.inputContainerStyle}
        leftIcon={{ type: 'font-awesome', name: 'home' }}
        onChangeText={(dateOfNextAppointment) => setState({ ...state, dateOfNextAppointment })}
        style={styles.inputStyle}
      />

                <View style={{ flexDirection: 'row' }}>
                    <Button style={[styles.inputContainerStyle, { paddingRight: 1 }]}
                        title="Submit"
                        onPress={() => {
                            //call create which will also make the form disappear
                            createEntry(state, navigation);
                        }}
                    /><Button style={[styles.inputContainerStyle, { paddingLeft: 1 }]}
                        title="Cancel"
                        onPress={() => {
                            //call create which will also make the form disappear
                            navigation.goBack();
                        }}
                        buttonStyle={{ backgroundColor: 'orange' }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffff2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 18
    },
    inputContainerStyle: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fffff2'
    },
    inputStyle: {
        backgroundColor: '#F2F3F5',
        borderRadius: 6,
        height: '100%',
        padding: 6
    }
});

export default AddEntry;