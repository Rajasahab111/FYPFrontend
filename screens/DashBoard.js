import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import NavigationBar from 'react-native-navbar';




  const rightButton = {
    title: '+',
    handler: () => alert('hello!'),
  };

  const title = {
    title: 'Estate 🏠',
  };
  const t = {
    title: 'Estate 🏠',
  };
  const leftButton = {
    title: '..',
  };


const DashBoard = () =>  {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={title}
          rightButton={rightButton}
          leftButton ={leftButton}

        />
      </View>
    );
  }
 const styles =StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#483D8B',
    }

  }
)

export default DashBoard;
