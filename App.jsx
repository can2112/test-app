import React, {useEffect} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import MetaWidget from '@onmeta/react-native-sdk';

function App() {
  const eventHandler = async (event, data) => {
    console.log(event, 'checking the event<--->');
    console.log(data, 'data from the event---->');
    //
    switch (event) {
      case 'upi-intent': {
        const Linkdata = await JSON.parse(data);
        void Linking.openURL(Linkdata.link);
      }
      default: {
        console.log(event, '<----->event<--->');
        console.log(data, '<---->event data<---->');
      }
    }
  };

  useEffect(() => {
    console.log('rendering effect--->');
  });

  return (

      <MetaWidget
        queryParams={{
          apiKey: 'b911cb3f-3e53-4faa-a4ad-43509c19baf2',
          environment: 'STAGING',
        }}
        onEventHandler={eventHandler}
      />
 
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
