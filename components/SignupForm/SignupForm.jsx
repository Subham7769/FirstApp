import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };
  const handleSignup = () => {
    // Perform form validation and signup logic here
    console.log(formData);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.headings}>Signup Form</Text>
      <View>
        <TextInput
          placeholder="Name"
          value={formData.name}
          style={styles.input}
          onChangeText={value => handleInputChange('name', value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          value={formData.email}
          style={styles.input}
          keyboardType="email-address"
          onChangeText={value => handleInputChange('email', value)}
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          value={formData.password}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={value => handleInputChange('password', value)}
        />
      </View>
      <View>
        <Button title="Signup" onPress={handleSignup} />
      </View>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  headings: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    padding: 2,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 10,
  },
});
