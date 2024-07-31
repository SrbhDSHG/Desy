import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './components/Login/LoginPage'
import LoginHelper from './components/Login/LoginHelper'
import SignUpContact from './components/SignUp/PhoneNumAdd'
import CreatePassword from './components/SignUp/CreatePassword'
import NameInput from './components/SignUp/NameInput'
import UserName from './components/SignUp/UserName'
import AddProfilePhoto from './components/SignUp/AddProfilePhoto'
import YouAreIn from './components/SignUp/YouAreIn'
import EatingMostAt from './components/EatingLocations/EatingMostAt'
import DietaryRest from './components/DietartRestriction/DietaryRest'
import DesyAnyWhere from './components/EatingLocations/DesyAnyWhere'
import FindYourFriends from './components/DietartRestriction/FindYourFriends'
import StayConnected from './components/DietartRestriction/StayConnected'
import CuisineNotLike from './components/DietartRestriction/AnyCuisineNotLike'
import HomeScreenDisplay from './components/HomeScreen/HomeScreenDisplay'
import EmailVerify from './components/SignUp/EmailVerify'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import EmailAdd from './components/SignUp/EmailAdd'
import Top10Restaurants from './components/Restaurants/Top10/Top10Restaurants'
import DataProvider from './components/store/context/DataContext'
import ListPressed from './components/Restaurants/Top10/ListPressed'
import OnMapListed from './components/Restaurants/Top10/OnMapListed'
import RestaurantMenu from './components/Restaurants/Restaurant/RestaurantMenu'
import Icon from './components/UI/Icon'
import CustomHeader from './components/UI/CustomHeader'
import { FeatherIcon } from './components/Utility/StaticData/IconFamily'
import MemberDishPics from './components/Restaurants/Members/MemberDishPics'
import MemberProfile from './components/Restaurants/Members/MemberProfile'
// import RestaurantAllDish from './components/Restaurants/Restaurant/RestaurantAllDish'
import RestaurantAllDish2 from './components/Restaurants/Restaurant/RestaurantAllDish2'
import UserOptions from './components/Restaurants/Member/UserOptions'

// import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator()
SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn)

export default function App() {
  const [fontsLoaded] = useFonts({
    'Philosopher-Regular': require('./assets/fonts/Philosopher-Regular.ttf'),
    'Philosopher-Bold': require('./assets/fonts/Philosopher-Bold.ttf'),
    'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'),
    'Mulish-Medium': require('./assets/fonts/Mulish-Medium.ttf'),
    'Mulish-Bold': require('./assets/fonts/Mulish-Bold.ttf'),
    'Mulish-SemiBold': require('./assets/fonts/Mulish-SemiBold.ttf'),
  })

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null
  }
  return (
    <>
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Top10 Restaurants"
            // initialRouteName="email verify"
            // initialRouteName="Stay Connected"
            // initialRouteName="Home"
            // initialRouteName="User options"
            screenOptions={{
              headerShown: true,
              title: '',
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTransparent: true,
            }}
          >
            {/* <Stack.Screen
          name="Desy"
          component={GradientText}
          options={{ headerShown: false }}
        /> */}
            <Stack.Screen
              name="Home"
              component={HomeScreenDisplay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loginpage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUpContact" component={SignUpContact} />
            <Stack.Screen
              name="NameInput"
              component={NameInput}
              // options={({ navigation }) => ({
              //   headerLeft: ({ tintColor }) => (
              //     <CustomNavigation
              //       icon={'arrow-back'}
              //       size={24}
              //       color={tintColor}
              //       onPress={() => navigation.navigate('')}
              //     />
              //   ),
              // })}
            />
            <Stack.Screen
              name="Email Add"
              component={EmailAdd}
              // options={{ headerShown: false }}
            />
            <Stack.Screen
              name="email verify"
              component={EmailVerify}
              // options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserName"
              component={UserName}
              // options={{ headerShown: false }}
            />
            <Stack.Screen name="Createpass" component={CreatePassword} />
            <Stack.Screen name="Addpic" component={AddProfilePhoto} />
            <Stack.Screen name="YouAreIn" component={YouAreIn} />
            <Stack.Screen name="Dietary Restriction" component={DietaryRest} />

            <Stack.Screen name="Eating Most At" component={EatingMostAt} />
            <Stack.Screen name="Desy Anywhere" component={DesyAnyWhere} />
            {/* <Stack.Screen
              name="Restaurant All Dish"
              component={RestaurantAllDish}
            /> */}
            <Stack.Screen
              name="Find Your Freinds "
              component={FindYourFriends}
            />
            <Stack.Screen name="Cuisine Not Like" component={CuisineNotLike} />
            <Stack.Screen name="Stay Connected" component={StayConnected} />
            <Stack.Screen
              name="Top10 Restaurants"
              component={Top10Restaurants}
            />
            <Stack.Screen
              name="Top 10 NYC Italian"
              component={ListPressed}
              options={{
                headerShown: true,
                headerBackTitleVisible: true,
                headerShadowVisible: true,
                headerTransparent: false,
              }}
            />
            <Stack.Screen
              name="List View Pressed"
              component={ListPressed}
              options={({ navigation }) => ({
                header: () => (
                  <CustomHeader
                    navigation={navigation}
                    iconFamily={['Feather']}
                    icons={['share']}
                  />
                ),

                headerShown: true,
                title: 'Top 10 NYC Italian',
                headerBackTitleVisible: true,
                headerShadowVisible: false,
                headerTransparent: false,
              })}
            />
            <Stack.Screen
              name="OnMapListed"
              component={OnMapListed}
              options={({ navigation }) => ({
                header: () => (
                  <CustomHeader
                    navigation={navigation}
                    iconFamily={['Feather']}
                    icons={['share']}
                  />
                ),
                headerShown: true,
                title: 'Top 10 NYC Italian',
                headerBackTitleVisible: true,
                headerShadowVisible: true,
                headerTransparent: false,
              })}
            />
            <Stack.Screen
              name="Restaurant Menu"
              component={RestaurantMenu}
              options={({ navigation }) => ({
                header: () => (
                  <CustomHeader
                    navigation={navigation}
                    backgroundColor="transparent"
                  />
                ),
                headerShown: true,
                // title: '',
                // headerBackTitleVisible: false,
                // headerShadowVisible: false,
                // headerTransparent: true,
              })}
            />
            <Stack.Screen
              name="Member Dish Pics"
              component={MemberDishPics}
              options={({ navigation, route }) => ({
                header: () => (
                  <CustomHeader
                    navigation={navigation}
                    elevation={2}
                    backgroundColor="white"
                    headerTitle={
                      route.params?.headerTitle || 'Member Dish Pics'
                    }
                  />
                ),
                headerShown: true,
                // title: '',
                headerBackTitleVisible: true,
                headerShadowVisible: true,
                headerTransparent: true,
              })}
            />
            <Stack.Screen
              name="Restaurant Dish"
              component={RestaurantAllDish2}
              options={({ navigation, route }) => ({
                headerShown: true,
                // headerBackTitleVisible: true,
                // headerShadowVisible: true,
                headerTransparent: false,
                header: () => (
                  <CustomHeader
                    navigation={(navigation, route)}
                    headerTitle={`${route.params.list.name}, ${route.params.list.address.city}`}
                    backgroundColor="white"
                    style={{
                      backgroundColor: '#FFFFFF',
                      shadowColor: '#000000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.15,
                      shadowRadius: 8,
                      elevation: 5,
                    }}
                  />
                ),
                headerShown: true,
                headerBackTitleVisible: false,
              })}
            />
            <Stack.Screen
              name="MemberProfile"
              component={MemberProfile}
              options={({ navigation, route }) => ({
                header: () => (
                  <CustomHeader
                    navigation={navigation}
                    elevation={2}
                    backgroundColor="white"
                    title={true}
                    // headerTitle="Profile"
                    headerTitle={route.params?.headerTitle || ''} // Use route.params to set the title dynamically
                    iconFamily={['AntDesign']}
                    icons={['ellipsis1']}
                    color="black"
                    size={24}
                  />
                ),
                headerShown: true,
                headerBackTitleVisible: false,
              })}
            />
            {/* <Stack.Screen
              name="User options"
              component={UserOptions}
              options={({ navigation, route }) => ({
                header: () => (
                  <CustomHeader
                    navigation={navigation}
                    elevation={2}
                    backgroundColor="white"
                    title={true}
                    // headerTitle="Profile"
                    headerTitle={route.params?.headerTitle || ''} // Use route.params to set the title dynamically
                    iconFamily={['AntDesign']}
                    icons={['ellipsis1']}
                    color="black"
                    size={24}
                  />
                ),
                headerShown: true,
                headerBackTitleVisible: false,
              })}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </>
  )
}
