import moment from "moment";
import { useState } from "react";
import { View} from "react-native";
import { Calendar } from "react-native-calendars";
const CalendarCom: React.FC = () => {
  const [dateCal, setDateCal] = useState(moment(new Date).format('DD-MM-YYYY'));

  return (
    <View>
      <Calendar
      style={{padding:10, margin:5, borderRadius:9}}
        onDayPress={(date) => {
          setDateCal(date.dateString);
          alert(date.dateString)
        }}
      />
     
    </View>
  );
};
export default CalendarCom;
