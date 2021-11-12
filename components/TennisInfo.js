import React, { useState, useEffect } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const TennisInfo = () => {

  const DATA = [
  {
    name: 'First Player',
    ranking: '4.5',
    hand:'Right',
  },
  {
    name: 'Second Player',
    ranking:'5.5',
    hand:'Left',
  },
  {
    name: 'Third Player',
    ranking: '6.5',
    hand:'Right',
  },
    {
    name: 'Fourth Player',
    ranking: '6.5',
    hand:'Right',
  },
];


  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [showRepo, setShowRepo] = useState(false);
 // const getGithubData = async (user) => {
 //   try {
 //     let result = await fetch('https://api.github.com/users/'+user+'/repos')
 //     let cdata = await result.json()
 //     setData(cdata);
 //     setLoading(false);
      
 //   } catch (e) {
 //     console.log(`error in getGithubData: ${JSON.stringify(e)}`);
 //   }
 // };
 // useEffect(() => {
 //   getGithubData(user);
 // }, [user]);

  const renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor: '#eee',flexDirection: 'column',margin: 15, padding: 10}}>
        <Text style = {{fontSize: 25}}>
          {item.name}
        </Text>
        <Text style = {{fontSize: 25}}>
          {item.ranking} 
        </Text>
        <Text style = {{fontSize: 25}}>
          {item.hand}
        </Text>
        <Button 
          title = 'press me'
        />
      </View>
    );
  };

    return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
        //  keyExtractor={(item) => item.description}
        />
        </ScrollView>
    </SafeAreaView>
  );
}

export default TennisInfo;