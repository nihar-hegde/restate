import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="p-4">
      <Text className="font-rubik text-3xl my-10">Welcome to ReState</Text>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/explore"}>exploreeeeeeee</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/1"}>Properties</Link>
    </View>
  );
}
