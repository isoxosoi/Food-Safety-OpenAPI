// App.js
import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity, // ⬅️ 추가
} from "react-native";



export default function App() {
  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState("여기에 설명이 표시됩니다.");

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Questions 카드 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Questions</Text>
          <TextInput
            value={question}
            onChangeText={setQuestion}
            placeholder="질문을 입력하세요 (예: 'BPA가 뭐야?')"
            placeholderTextColor="rgba(0,0,0,0.45)"
            style={styles.input}
            multiline
          />

          {/* ⬇️ Find 버튼 추가 */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Find pressed:", question)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Find</Text>
          </TouchableOpacity>
        </View>

        {/* Explanation 섹션 */}
        <Text style={styles.sectionTitle}>Explanation</Text>
        <View style={styles.explainBox}>
          <Text style={styles.explainText}>{explanation}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
  container: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: "#9cccf7",
    borderRadius: 18,
    padding: 16,
    minHeight: 180,
    justifyContent: "flex-start",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0e2033",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
  },
  // ⬇️ 버튼 스타일 추가
  button: {
    marginTop: 12,
    backgroundColor: "#0f0f10",
    borderRadius: 10,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.3,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 4,
  },
  explainBox: {
    backgroundColor: "#2a2a2a",
    borderRadius: 12,
    padding: 14,
    minHeight: 120,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  explainText: {
    color: "#d9d9d9",
    fontSize: 16,
    lineHeight: 22,
  },
});
