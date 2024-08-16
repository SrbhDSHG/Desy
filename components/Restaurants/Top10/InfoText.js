import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const RestaurantAt = [{ location: 'NYC', type: 'Italian' }]
const Number = 0

function InfoText({ location, dishType: type }) {
  return (
    <View style={styles.infoTextContainer}>
      <Text
        style={[styles.headerText, styles.textColor]}
        // >{`Top 10 ${RestaurantAt[0].location} ${RestaurantAt[0].type}`}</Text>
      >{`Top 10 ${location} ${type}`}</Text>
      <View style={styles.threeIcons}>
        <View style={styles.iconBox}>
          <Feather name="bookmark" size={30} style={styles.iconStyle} />
        </View>
        <View style={styles.iconBox}>
          <Feather name="share" size={30} style={styles.iconStyle} />
        </View>
        <View style={styles.iconBox}>
          <MaterialIcons
            name="favorite-border"
            size={30}
            style={styles.iconStyle}
          />
        </View>
      </View>
      <Text style={[styles.subText1, styles.textColor]}>
        The top 10 {type} restaurants in {location}, as ranked by Desy members
      </Text>
      <Text
        style={[styles.subText2, styles.textColor]}
      >{`You’ve been to ${Number} of 10`}</Text>
    </View>
  )
}

export default InfoText

const styles = StyleSheet.create({
  infoTextContainer: {
    padding: 10,
    borderRadius: 10,
    // position: 'absolute',
  },
  textColor: {
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 5,
  },
  threeIcons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Mulish-Bold',
  },
  subText1: {
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
  },
  subText2: {
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
    marginTop: 5,
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#959595B3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  iconStyle: {
    color: 'white',
  },
})
