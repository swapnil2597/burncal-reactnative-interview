import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader} >
        <Text style={styles.profileHeader__title} >Profile</Text>
        <Image
          style={styles.profileHeader__avatar}
          source={{ uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
        />
        <Text style={styles.profileHeader__username} >Vinauyak Gupta</Text>
        <Text style={styles.profileHeader__memberSince} >Member since February 2021</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle} >Your Coach</Text>
        <View style={styles.sectionBox}>
        <Image
          style={styles.sectionBox__avatar}
          source={{ uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
        />
        <View style={styles.sectionBox__content} >
          <Text style={styles.sectionBox__contentTitle} >Chetan Reddy</Text>
          <Text style={styles.sectionBox__contentSubtitle} >
          INFS Certified Fitness Coach, Co-founder @Burncal.fit
          </Text>
        </View>
        <Image
          style={styles.sectionBox__arrow}
          source={{ uri:"https://www.materialui.co/materialIcons/navigation/chevron_right_grey_192x192.png" }}
        />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader} >
          <Text style={styles.sectionHeader__Title} >Past 30 days</Text>
          <Text style={styles.sectionHeader__seeAll} >See all</Text>
        </View>
        <View style={styles.sectionBoxPast30}>
          <View style={styles.sectionBoxHeader} >
            <Text style={styles.sectionBoxHeader__title} >ACTIVE DAYS</Text>
            <Text style={styles.sectionBoxHeader__value} >17</Text>
            <View style={styles.sectionBoxHeader__subTitleContainer}>
              <Text style={styles.sectionBoxHeader__subTitle} >FEB 11 - MAR 13</Text>
            </View>
          </View>
          <View sectionBoxPast30__body>
            <View style={styles.statBoxRow}>
              <View style={styles.sectionBoxPast30__statBox} >

              </View>
              <View style={styles.sectionBoxPast30__statBox} ></View>
            </View>
            <View style={styles.statBoxRow}>
              <View style={styles.sectionBoxPast30__statBox} ></View>
              <View style={styles.sectionBoxPast30__statBox} ></View>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
  profileHeader: {
    width: "100%",
    height: '280px',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    
  },
  profileHeader__title: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: 15,
    marginTop: 62,
  },
  profileHeader__avatar: {
    width:95,
    height:95,
    borderRadius:47.5,
    marginBottom: 15,
  },
  profileHeader__username: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: 3,
  },
  profileHeader__memberSince: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '14px',
    fontWeight: '500',
  },
  section: {
    padding:24,
  },
  sectionHeader:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 12,
  },
  sectionHeader__Title: {
    color: '#000',
    fontSize: '18px',
    fontWeight: '600',
  },
  sectionHeader__seeAll: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#007EFE',
  },
  sectionTitle: {
    color: '#000',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionBox: {
    minHeight:88,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop:17,
    paddingBottom:17,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  sectionBox__avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight:13,
  },
  sectionBox__content: {
    flex:1,
  },
  sectionBox__contentTitle: {
    color: '#000',
    fontSize: '20px',
    fontWeight: '400',
    marginBottom: 4,
  },
  sectionBox__contentSubtitle: {
    color: '#828282',
    fontSize: '12px',
    fontWeight: '400',
    marginBottom: 0,
  },
  sectionBox__arrow: {
    width:20,
    height:20,
    marginLeft: 'auto',
    alignSelf: 'center',
  },
  sectionBoxPast30: {
    minHeight:88,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop:17,
    paddingBottom:17,
    display: 'flex',
  },
  sectionBoxHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginBottom:20,
    
  },
  sectionBoxHeader__title: {
    color: '#828282',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: 9,
  },
  sectionBoxHeader__value: {
    color: '#000',
    fontSize: '42px',
    lineHeight: 51,
    fontWeight: '500',
    marginBottom: 12,
  },
  sectionBoxHeader__subTitleContainer: {
    backgroundColor: '#fff',
    paddingRight:6,
    paddingLeft:6,
    position: 'relative',
    top:6,
  },
  sectionBoxHeader__subTitle: {
    color: '#828282',
    fontSize: '12px',
    fontWeight: '400',
    marginBottom: 0,
  },
  statBoxRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:33,
    paddingLeft:36,
    paddingRight:36,
  },
  sectionBoxPast30__statBox: {
    width:'29%',
    height:37,
    backgroundColor: 'yellow',
  },
});
