import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { dietaryRestrictionList } from '../Utility/StaticData/DietaryJson'
import SnackbarCreator from '../Utility/SnackbarCreator'
import HeadingCreator from '../UI/HeadingCreator'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import Container from '../UI/Container'
import { useData } from '../store/context/DataContext'
import { addArrayList } from '../Utility/AddArrayList'

function DietaryRest({ navigation }) {
  const [restrictionArray, setRestrictionArray] = useState(
    dietaryRestrictionList.slice(0, 6)
  )
  const {
    dietaryRestriction,
    setDietaryRestriction,
    createUser,
    setCurrentUser,
  } = useData()
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const toggleItemSelect = (item) => {}

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
      return () => clearTimeout(timeout) // Clear timeout on component unmount
    }
  }, [message])

  const pressHandler = (id) => {
    console.log(dietaryRestrictionList[id - 1].name)
    const restriction = dietaryRestrictionList[id - 1].name
    setDietaryRestriction((prev) => addArrayList(restriction, prev))
  }
  const toggleShowMore = () => {
    setRestrictionArray(dietaryRestrictionList.slice(6))
  }
  const buttonPressHandler = async () => {
    setLoading(true)
    try {
      const response = await createUser()
      console.log('response after creating user', response)
      setLoading(false)

      if (response.status === 'success') {
        setCurrentUser(response.user)
        setMessage(response.message)
        setTimeout(() => {
          navigation.navigate('Find Your Friends')
        }, 3000) // Delay of 3 seconds
      } else {
        // Handle case where response is not successful
        setMessage('Failed to create user. Please try again.')
      }
    } catch (error) {
      // Log or handle error
      console.error('Error during user creation:', error)
      setMessage('An error occurred. Please try again later.')
    } finally {
      setLoading(false) // Ensure loading is turned off regardless of success or failure
    }
  }

  return (
    <Container>
      <HeadingCreator
        headerText={'Any dietary restrictions?'}
        IconComp={<FontAwesome name="cutlery" size={24} color="#03A4FF" />}
      />
      <View style={styles.FlatListContainer}>
        <FlatList
          style={styles.listStyle}
          data={restrictionArray}
          renderItem={({ item }) => (
            <SnackbarCreator lists={item} onPressMethod={pressHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {!showMore && (
        <View style={styles.moreOptContainer}>
          <Pressable onPress={toggleShowMore}>
            <View style={styles.moreText}>
              <Text style={styles.moreOption}>More options</Text>
              <View style={styles.arrowIcon}>
                <Entypo name="chevron-down" size={24} color="#03A4FF" />
              </View>
            </View>
          </Pressable>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText={dietaryRestriction.length > 0 ? 'Continue' : 'Nope'}
          isEnabled={true}
          onPress={buttonPressHandler}
        />
      </View>

      <Modal
        transparent={true}
        animationType="none"
        visible={loading || !!message} // Show modal during loading or if there's a message
        onRequestClose={() => setMessage('')} // Allow modal to be closed by pressing back
      >
        <Pressable
          style={styles.modalBackground}
          onPress={() => setMessage('')}
        >
          <View style={styles.activityIndicatorWrapper}>
            {loading ? (
              <>
                <ActivityIndicator size="large" color="#03A4FF" />
                <Text style={styles.modalText}>Creating user...</Text>
              </>
            ) : (
              <Text style={styles.modalText}>{message}</Text>
            )}
          </View>
        </Pressable>
      </Modal>
    </Container>
  )
}

export default DietaryRest

const styles = StyleSheet.create({
  moreOption: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1C8AC8',
  },
  FlatListContainer: {
    width: '100%',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  moreOptContainer: {
    left: -120,
  },
  moreText: {
    flexDirection: 'row',
  },
  listStyle: {
    maxHeight: 400,
  },
  arrowIcon: {
    position: 'absolute',
    marginLeft: 100,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#03A4FF',
  },
})
