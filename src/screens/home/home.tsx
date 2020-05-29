import {analytics} from '@analytics';
import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {Button, Colors, IconButton, List, Switch} from 'react-native-paper';
import styled from 'styled-components/native';
import {DiscardCards} from './components';
import useHome from './hooks';

const HomeScreenComponent = () => {
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
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Screen testID="HomeScreen">
        <List.Item
          testID="HomeScreen.CharacterSelectionButton"
          title={data?.character}
          titleStyle={headlineStyle}
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
          <List.Item
            title={`Curse (${data?.curseCount})`}
            right={props => (
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
          <List.Item
            title={`Bless (${data?.blessCount})`}
            right={props => (
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
          <Buttons>
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

const Screen = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const DrawButton = styled(Button)`
  flex: 1;
  margin-left: 8px;
`;

const ShuffleButton = styled(Button)`
  flex: 1;
  margin-right: 8px;
`;

const Buttons = styled.View`
  background-color: white;
  height: 72px;
  padding: 16px 16px 16px 16px;
  flex-direction: row;
`;

const Body = styled.View`
  flex: 1;
`;
const Footer = styled.View``;

const headlineStyle = StyleSheet.create({fontSize: 24});
