// import React from 'react'
// import {
//   ImageBackground,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native'
// import { FontAwesome5, AntDesign } from '@expo/vector-icons'
// import { LinearGradient } from 'expo-linear-gradient'

// // const photosFromDesy = [
// //   {
// //     id: 0,
// //     name: 'Burger',
// //     imagelink: require('../../Utility/StaticData/DishesPics/Burger.jpeg'),
// //   },
// //   {
// //     id: 1,
// //     name: 'Pasta',
// //     imagelink: require('../../Utility/StaticData/DishesPics/Noodels.jpeg'),
// //   },
// //   {
// //     id: 2,
// //     name: 'Pizza',
// //     imagelink: require('../../Utility/StaticData/DishesPics/Pizza.png'),
// //   },
// //   {
// //     id: 3,
// //     name: 'Italian Pasta',
// //     imagelink: require('../../Utility/StaticData/DishesPics/air-fryer-pasta-square-2.jpeg'),
// //   },
// //   {
// //     id: 4,
// //     name: 'Sphagetti',
// //     imagelink: require('../../Utility/StaticData/DishesPics/Noodels.jpeg'),
// //   },
// //   {
// //     id: 5,
// //     name: 'Sandwich',
// //     imagelink: require('../../Utility/StaticData/DishesPics/Chopsy.jpeg'),
// //   },
// // ]

// function DesyMemberPhotos({ navigation }) {
//   const pressHandler = (photo) => {
//     console.log('pressed photo', photo)
//     navigation.navigate('MemberProfile', { photo })
//   }
//   return (
//     <View style={styles.container}>
//       {photosFromDesy.map((photo, index) => (
//         <Pressable
//           onPress={() => pressHandler(photo)}
//           key={index}
//           style={({ pressed }) => [
//             pressed && styles.pressedContainer,
//             styles.photoContainer,
//           ]}
//           // style={[styles.photoContainer]}
//         >
//           <ImageBackground
//             source={photo.imagelink}
//             style={styles.imageBackground}
//             imageStyle={{ borderRadius: 8 }}
//           >
//             <View style={styles.textAndIconContainer}>
//               <LinearGradient
//                 colors={['rgba(0, 0, 0, 0.03)', 'rgba(0, 0, 0, 0.6)']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 0, y: 0.5 }}
//                 style={styles.gradient}
//               >
//                 <View style={styles.textAndIcon}>
//                   <Text style={styles.text}>{photo.name}</Text>
//                   <View style={styles.iconContainer}>
//                     <View style={styles.iconBox}>
//                       <FontAwesome5 name="fire" size={14} color="white" />
//                     </View>
//                     <View style={styles.iconBox}>
//                       <AntDesign name="hearto" size={14} color="white" />
//                     </View>
//                   </View>
//                 </View>
//               </LinearGradient>
//             </View>
//           </ImageBackground>
//         </Pressable>
//       ))}
//     </View>
//   )
// }

// export default DesyMemberPhotos

// const styles = StyleSheet.create({
//   scrollViewContent: {
//     paddingHorizontal: 10,
//     paddingBottom: 20,
//   },
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   photoContainer: {
//     width: '48%',
//     height: 175,
//     marginBottom: 10,
//     backgroundColor: 'white',
//     borderRadius: 8,
//   },
//   imageBackground: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   textAndIconContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//   },
//   textAndIcon: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   pressedContainer: {
//     opacity: 0.5,
//     backgroundColor: '#E9F7FF',
//   },
//   iconBox: {
//     backgroundColor: '#959595B3',
//     marginLeft: 8,
//     borderRadius: 6,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//     fontFamily: 'Mulish-Medium',
//     fontSize: 14,
//   },
// })
