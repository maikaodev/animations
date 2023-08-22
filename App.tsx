import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;

  const wImage = useRef(new Animated.Value(150)).current;
  const hImage = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),

      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      animatedWidth();
    });
  }, []);

  const animatedWidth = () => {
    Animated.timing(wImage, {
      useNativeDriver: false,
      toValue: 300,
      duration: 1500,
      easing: Easing.ease,
    }).start();
  };

  const _wImage = wImage.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '40%'],
  });

  const _hImage = hImage.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '60%'],
  });

  let procentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100], //Entrada
    outputRange: ['0%', '100%'], //Vai sair 0% até 100%
  });

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ['5%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: procentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#222222',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.Image
          source={{
            uri: 'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
          }}
          resizeMode='contain'
          alt="mk"
          style={{
            width: _wImage,
            height: _hImage,

          }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
