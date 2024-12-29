import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="p-4">
      {/* Test 1: Direct font-family */}
      <Text className="my-2 text-3xl" style={{ fontFamily: "Rubik-Regular" }}>
        Test 1: Direct Style
      </Text>

      {/* Test 2: NativeWind class */}
      <Text className="my-2 text-3xl font-rubik">Test 2: NativeWind Class</Text>

      <Text className="font-rubik text-3xl "> Welcome to ReState</Text>

      {/* Test 3: Combined */}
      <Text className="my-2 text-3xl font-rubik-bold">Test 3: Bold Weight</Text>

      {/* Test 4: Different font weights */}
      <Text className="my-2 text-3xl font-rubik-light">
        Test 4: Light Weight
      </Text>

      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/explore"}>exploreeeeeeee</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/1"}>Properties</Link>
    </View>
  );
}
