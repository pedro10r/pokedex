import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card } from '@components/Card';
import { PokemonInfoDTO } from '@dtos/PokemonDTO';

type Props = {
  data: PokemonInfoDTO[];
}

export function PokemonList({ data }: Props) {
  const navigation = useNavigation();

  const handleOpenDetails = useCallback((id: number) => {
    navigation.navigate('details', { id });
  },[])

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      contentContainerStyle={{
        flexDirection: 'column'
      }}
      renderItem={({ item }) => (
        <Card
          data={item}
          onPress={() => handleOpenDetails(item.id)}
        />
      )}
    />
  );
}