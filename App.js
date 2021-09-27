import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Appstyles from './App.scss';
import Sdsstyles from './sds.scss';
import themeColors from './colors.module.scss';

const spacingMap = [4, 8, 12, 16, 24, 32, 40, 64, '64-2'];

const getTheme = (themeMode = 'light') => {
  return Object.keys(themeColors).reduce((themeValues, tKey) => {
    if (tKey.startsWith(`sds_theme_${themeMode}`)) {
      let trimmedKey = tKey.replace(`sds_theme_${themeMode}`, '');
      return {
        ...themeValues,
        [trimmedKey]: themeColors[tKey],
      };
    } else {
      return themeValues;
    }
  }, {});
};

const themeModes = ['light', 'dark'];

export default function App() {
  // console.log({ Appstyles });
  console.log({ Sdsstyles });
  console.log({ themeColors });
  console.log(
    'btn-example',
    // Sdsstyles['btn-example'],
    Sdsstyles['text-variable'],
    themeColors['--sds-example-variable-color'],
    themeColors['themes']
  );

  const [themeMode, setThemeMode] = React.useState('light');
  const [theme, setTheme] = React.useState({});
  const [spacingValues, setSpacingValues] = React.useState(spacingMap);

  const [timesPressed, setTimesPressed] = React.useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  React.useEffect(() => {
    setTheme(getTheme(themeMode));

    // return () => {
    //   // effect
    // };
  }, [themeMode]);

  // console.log({ themeColors, theme });

  return (
    <SafeAreaView style={Appstyles.container}>
      <ScrollView style={Appstyles.scrollView}>
        <View style={[Sdsstyles.viewShadow, Sdsstyles['spacing-32']]}>
          <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'red' : 'white',
              },
            ]}
          >
            {({ pressed }) => <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
          </Pressable>
          <View>
            <Text testID="pressable_press_console">{textLog}</Text>
          </View>
        </View>
        <View
          style={[
            // Sdsstyles.viewShadow,
            // Sdsstyles['spacing-32'],
            {
              // backgroundColor: theme['--background'],
              borderColor: theme['--border'],
            },
          ]}
        >
          <Picker
            selectedValue={themeMode}
            onValueChange={(itemValue, itemIndex) => setThemeMode(itemValue)}
            style={{
              backgroundColor: theme['--background'],
              borderColor: theme['--border'],
              color: theme['--color_primary'],
            }}
          >
            {themeModes.map((tMode) => {
              return (
                <Picker.Item
                  style={{ color: theme['--color_primary'] }}
                  key={tMode}
                  label={tMode}
                  value={tMode}
                />
              );
            })}
          </Picker>
        </View>

        <View
          style={[
            Sdsstyles['spacing-40'],
            themeColors[`sds-${themeMode}-example`],
            {
              backgroundColor: theme['--background'],
              borderColor: theme['--border'],
            },
          ]}
        >
          <Text
            style={[
              // themeColors[`sds-${themeMode}-example`],
              { color: theme['--color_primary'] },
            ]}
          >
            Hey I'm in {themeMode} mode!
          </Text>
        </View>

        <View style={Sdsstyles.buttonView}>
          <Button onPress={() => setThemeMode('light')} title="Light" />
          <Button onPress={() => setThemeMode('dark')} title="Dark" />
        </View>

        {/* <Text>Open up App.js to start working on your app!</Text>
      <View style={Appstyles.container}>
        <View style={Appstyles.boxWhite}>
          <View style={Appstyles.boxInside} />
        </View>
      </View>
      <View style={Appstyles.container}>
        <Text style={Appstyles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
      <View style={Appstyles.container}>
        <View style={Appstyles.boxWhite}></View>
      </View>
      <View style={Appstyles.container}>
        <View style={Appstyles.boxWhite} />
        <View style={Appstyles.boxPurple} />
        <View style={Appstyles.boxBlueViolet} />
      </View> */}
        <View style={Sdsstyles.viewShadow}>
          <Text style={Sdsstyles.mainTitle}>Text in MainTitle</Text>
        </View>
        <View>
          <Text style={Sdsstyles.h1}>Text in H1</Text>
        </View>
        <View>
          <Text style={Sdsstyles.title}>Text in ".title"</Text>
        </View>
        <View>
          <Text style={Sdsstyles.subtitle}>Text in ".subtitle"</Text>
        </View>
        <View>
          <Text style={Sdsstyles.h2}>Text header in ".h2"</Text>
        </View>
        <View>
          {[
            'gray',
            'blue',
            'green',
            'yellow',
            'red',
            'indigo',
            'purple',
            'teal',
            'lime',
            'orange',
            'pink',
          ].map((color) => {
            {
              /* console.log(`text-${color}`); */
            }
            return (
              <Text style={Sdsstyles[`text-${color}`]} key={color}>
                Text header in ".text-{color}"
              </Text>
            );
          })}
        </View>
        <View>
          {[
            'mouse',
            'sm-caps',
            'body',
            'body-lg',
            'heading-2',
            'heading-1',
            'title-2',
            'title-1',
          ].map((fsize) => {
            {
              /* console.log(`font-type-${fsize}`); */
            }
            return (
              <Text style={Sdsstyles[`font-type-${fsize}`]} key={fsize}>
                Text header in ".font-type-{fsize}"
              </Text>
            );
          })}
        </View>
        {[0, 1, 2, 3, 4, 5, 6].map((sh) => {
          return (
            <View
              style={[Sdsstyles[`shadow-${sh}`] /*{ elevation: sh + 10 }*/]}
              key={`shadow-${sh}`}
            >
              <Text style={Sdsstyles[`text-teal`]}>
                Box in shadow in ".shadow-{sh}"
              </Text>
            </View>
          );
        })}
        {spacingValues.map((sp) => {
          return (
            <View style={Sdsstyles[`spacing-${sp}`]} key={`spacing-${sp}`}>
              <Text style={Sdsstyles[`text-teal`]}>
                Box in spacing in ".spacing-{sp}"
              </Text>
            </View>
          );
        })}

        <View style={Sdsstyles.buttonView}>
          <Button onPress={() => setSpacingValues(spacingMap)} title="Normal" />
          <Button
            onPress={() => setSpacingValues(() => [...spacingMap].reverse())}
            title="Reverse"
          />
        </View>

        <View style={Sdsstyles[`navbar`]}>
          <Text style={Sdsstyles[`text-teal`]}>Box in depth in "app-nav"</Text>
        </View>

        <View style={Sdsstyles['parent']}>
          <View style={Sdsstyles['circle']}>
            <Text style={Sdsstyles[`text-teal`]}>Box</Text>
          </View>
          <View style={Sdsstyles['circle']}>
            <Text style={Sdsstyles[`text-teal`]}>Box</Text>
          </View>
          <View style={Sdsstyles['circle']}>
            <Text style={Sdsstyles[`text-teal`]}>Box</Text>
          </View>
        </View>

        <View style={Sdsstyles['grid-parent']}>
          <Text style={Sdsstyles['font-type-title-2']}>
            This is not working
          </Text>
          <View style={Sdsstyles['column']}>
            <Text style={Sdsstyles[`text-red`]}>Box</Text>
          </View>
          <View style={Sdsstyles['column']}>
            <Text style={Sdsstyles[`text-red`]}>Box</Text>
          </View>
          <View style={Sdsstyles['column']}>
            <Text style={Sdsstyles[`text-variable`]}>Box</Text>
          </View>
          <View style={Sdsstyles['column']}>
            <Text style={Sdsstyles[`text-variable-2`]}>Box</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
