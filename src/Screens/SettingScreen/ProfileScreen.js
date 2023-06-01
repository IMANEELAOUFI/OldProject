import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple,} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../Compenents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import ProfilePic from '../../../assets/images/ProfilePic.png';
import Icon from 'react-native-vector-icons';

const SECTIONS =[
  {
      header: 'Account',
      items: [
          { id: 'Modify personal information', icon:'edit', label:'Modify personal information', type: 'select'},
          { id: 'Change password', icon:'lock', label:'Change password', type: 'select'},
      ],
  },
  ];

const ProfileScreen = () => {

  const navigation = useNavigation();

  const onDeconnexionPressed = () => {
     navigation.navigate('Sign in');
  };
  const onEdit = () => {
    navigation.navigate('Edit profile');
  };
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.con} showsVerticalScrollIndicator={false}> 
            <View style={styles.header}>
             <Text style={styles.tir}>Settings</Text> 
            </View>
            <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={ProfilePic}
            size={100}
          />
        <TouchableOpacity onPress={onEdit}>
      <View style={styles.iner}>
        <Text style={styles.te}>Edit</Text>
        <Feather name="edit" size={20} color="black" />
      </View>
      </TouchableOpacity>
        </View>
        <View style={{marginLeft: 1}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>imane elaoufi</Title>
          </View>
      </View>
      <View style={styles.sectionHeader}>
        <View style={styles.row}>
        <FontAwesome name="envelope" size={20} color="#000" />
          <Text style={{color:"#000", marginLeft: 20}}>amounaela1@gmail.com</Text>
        </View>
        <View style={styles.row}>
        <Feather name="phone" color="#000" size={20} />
          <Text style={{color:"#000", marginLeft: 20}}>0771733388</Text>
        </View>
      </View>
      {SECTIONS.map(({ header, items }) => (
                <View style={styles.section} key={header}>
                    <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>{header}</Text>
                    </View>

                    <View>
                        {items.map(({label, id, type, icon}, index) => (
                          <View style={[styles.rowWrapper, index === 0 && {borderTopWidth: 0},
                          ]} key={id}>
                           <TouchableOpacity onPress={() => {

                           }}>
                            <View style={styles.row}>
                                <Feather
                                name={icon} color="#616161" size={22} style={{marginRight: 12}}
                                />
                            <Text style={styles.rowLabel}>{label}</Text>
                            <View style={styles.rowSpacer} />
                                {['select', 'link'].includes(type) &&  (
                                    <Feather name="chevron-right" color="#ababab" size={22}/>
                                )}
                            </View>
                           </TouchableOpacity>
                          </View>
                        ))}
                    </View>
                </View>
            ))}
            
             <CustomButton  
               text="Log out" 
               onPress={onDeconnexionPressed}  
             /> 
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  iner: {
    paddingTop: 60,
    marginVertical: 1
  },
  te: {
    marginRight: 5,
  },
con: {
    paddingVertical: 24,
},
tir: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
     marginVertical: 20,
},
header: {
    paddingHorizontal: 24,
    marginBottom: 12,
},

section:{
    paddingTop: 12,
},
sectionHeader: {
     paddingHorizontal: 24,
     paddingVertical: 8,
},
sectionHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#a7a7a7',  
},

rowWrapper: {
       paddingLeft: 24,
      // borderTopWidth: 1,
      // borderColor: '#e3e3e3',
       backgroundColor: '#fff',
},

row: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
},

rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
},

rowSpacer: {
    flex: 1,
},
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
  
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;
