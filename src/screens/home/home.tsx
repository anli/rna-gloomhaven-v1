import {analytics} from '@analytics';
import {Buttons, Screen, StatusBar} from '@components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Colors,
  IconButton,
  List,
  Switch,
  useTheme,
} from 'react-native-paper';
import styled from 'styled-components/native';
import {DiscardCards} from './components';
import useHome from './hooks';

const HomeScreenComponent = () => {
  const theme = useTheme();
  const {
    data,
    onDraw,
    onShuffle,
    onAddBless,
    onRemoveBless,
    onAddCurse,
    onRemoveCurse,
    onUpdatePerk,
    onCharacterSelection,
    onAddEquipment,
    onRemoveEquipment,
    onTop,
    onBottom,
    onRemoveMinusOne: nativeOnRemoveMinusOne,
    onAddMinusOne: nativeOnAddMinusOne,
  } = useHome();
  const [showDiviner, setShowDiviner] = useState<boolean>(false);

  const onToggleDiviner = () => {
    analytics().logSelectContent({
      content_type: 'Diviner',
      item_id: 'onToggleDiviner',
    });
    setShowDiviner(!showDiviner);
  };

  const onRemoveMinusOne = () => {
    analytics().logSelectContent({
      content_type: 'NonEquipmentMinusOne',
      item_id: 'onRemoveMinusOne',
    });
    nativeOnRemoveMinusOne();
  };

  const onAddMinusOne = () => {
    analytics().logSelectContent({
      content_type: 'NonEquipmentMinusOne',
      item_id: 'onAddMinusOne',
    });
    nativeOnAddMinusOne();
  };

  return (
    <>
      <StatusBar theme={theme} />
      <Screen theme={theme} testID="HomeScreen">
        <List.Item
          testID="HomeScreen.CharacterSelectionButton"
          title={data?.character}
          titleStyle={Styles.headline}
          onPress={onCharacterSelection}
          right={props => (
            <>
              <List.Icon {...props} icon="chevron-right" />
            </>
          )}
        />

        <Body />
        <Footer>
          <List.Item
            testID="HomeScreen.UpdatePerkButton"
            title="Perks"
            onPress={onUpdatePerk}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title={`Equipment -1 (${data?.equipmentCount})`}
            right={props => (
              <>
                <IconButton
                  {...props}
                  testID="HomeScreen.RemoveEquipmentButton"
                  icon="minus"
                  onPress={onRemoveEquipment}
                />
                <IconButton
                  {...props}
                  testID="HomeScreen.AddEquipmentButton"
                  icon="plus"
                  onPress={onAddEquipment}
                />
              </>
            )}
          />
          <List.Item
            title={`Non-equipment -1 (${data?.minusOneCount})`}
            right={props => (
              <>
                <IconButton
                  {...props}
                  testID="HomeScreen.RemoveMinusOneButton"
                  icon="minus"
                  onPress={onRemoveMinusOne}
                />
                <IconButton
                  {...props}
                  testID="HomeScreen.AddMinusOneButton"
                  icon="plus"
                  onPress={onAddMinusOne}
                />
              </>
            )}
          />
          <Row>
            <HalfItem
              titleEllipsizeMode="middle"
              title={`Curse (${data?.curseCount})`}
              right={(props: any) => (
                <>
                  <IconButton
                    {...props}
                    testID="HomeScreen.RemoveCurseButton"
                    icon="minus"
                    onPress={onRemoveCurse}
                  />
                  <IconButton
                    {...props}
                    testID="HomeScreen.AddCurseButton"
                    icon="plus"
                    onPress={onAddCurse}
                  />
                </>
              )}
            />
            <HalfItem
              titleEllipsizeMode="middle"
              title={`Bless (${data?.blessCount})`}
              right={(props: any) => (
                <>
                  <IconButton
                    {...props}
                    testID="HomeScreen.RemoveBlessButton"
                    icon="minus"
                    onPress={onRemoveBless}
                  />
                  <IconButton
                    {...props}
                    testID="HomeScreen.AddBlessButton"
                    icon="plus"
                    onPress={onAddBless}
                  />
                </>
              )}
            />
          </Row>

          <List.Item
            title="Diviner effects on discards"
            right={() => (
              <Switch
                testID="HomeScreen.DivinerEffectButton"
                value={showDiviner}
                onValueChange={onToggleDiviner}
              />
            )}
          />

          <List.Section>
            <List.Subheader>
              Drawn Cards {data.isShuffle ? '**Shuffle next round**' : ''}
            </List.Subheader>

            <DiscardCards
              showTopBottomButtons={showDiviner}
              testID="HomeScreen.DiscardCards"
              data={data.discardCards}
              onTop={onTop}
              onBottom={onBottom}
            />
          </List.Section>
          <Buttons theme={theme}>
            <ShuffleButton
              testID="HomeScreen.ShuffleButton"
              mode="outlined"
              onPress={onShuffle}>
              Shuffle ({data?.discardCards.length})
            </ShuffleButton>
            <DrawButton
              color={data?.isShuffle ? Colors.red900 : undefined}
              icon={data?.isShuffle ? 'sync' : undefined}
              testID="HomeScreen.DrawButton"
              mode="contained"
              onPress={onDraw}>
              Draw ({data?.drawCards.length})
            </DrawButton>
          </Buttons>
        </Footer>
      </Screen>
    </>
  );
};

const HomeScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = HomeScreenComponent;
  static Options = HomeScreenOptions;
}

const DrawButton = styled(Button)`
  flex: 1;
  margin-left: 8px;
`;

const ShuffleButton = styled(Button)`
  flex: 1;
  margin-right: 8px;
`;

const Body = styled.View`
  flex: 1;
`;
const Footer = styled.ScrollView``;

const Styles = StyleSheet.create({
  headline: {fontSize: 24},
});

const HalfItem = styled(List.Item)`
  width: 50%;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;
