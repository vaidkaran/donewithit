import React, {useState} from 'react';
import { View, Text, TouchableNativeFeedback, Button } from 'react-native';

export default function WelcomeText(props) {
  const [welcomeText, setWelcomeText] = useState('Hello react native');

  return (
    <View>
      <Text onPress={() => console.log('text clicked')}> {welcomeText} </Text>

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('black')}
      >
        <View style={{padding:20}}>
          <Button
            style={{ backgroundColor: 'blue' }}
            title='Change welcome text'
            onPress={() => {
              console.log('button clicked');
              setWelcomeText('state changed');
            }}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

