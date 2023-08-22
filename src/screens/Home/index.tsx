import { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import bgImg from '../../../assets/crono.png';

export const Home = () => {
  const [time, setTime] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    let interval;

    if (started) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [started]);

  const play = (): void => {
    setStarted(true);
  };

  const pause = (): void => {
    setStarted(false);
  };

  const reset = (): void => {
    setTime(0);
    setStarted(false);
  };

  const formatTimer = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const $seconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${$seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImg}
        style={styles.bgImage}
        resizeMode="contain"
      />
      <Text style={styles.timer}>{formatTimer(time)}</Text>

      <View style={styles.content}>
        <TouchableOpacity style={styles.btn} onPress={started ? pause : play}>
          <Text style={styles.textBtn}>{started ? 'Pausar' : 'Iniciar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={reset}>
          <Text style={styles.textBtn}>Resetar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#222222',

    gap: 16,

    position: 'relative',
  },
  bgImage: {
    height: 370,
    width: 300,

    position: 'absolute',

    top: 200,
  },
  content: {
    flexDirection: 'row',

    marginTop: 20,
  },
  timer: {
    color: '#ffffff',

    fontSize: 30,
  },
  btn: {
    paddingHorizontal: 20,
  },
  textBtn: {
    color: '#ffffff',

    fontSize: 20,
  },
});
