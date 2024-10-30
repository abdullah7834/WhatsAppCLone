import {Stack} from "expo-router"


const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{title:"Home"}}  />
    </Stack>
  )
}

export default RootNavigation