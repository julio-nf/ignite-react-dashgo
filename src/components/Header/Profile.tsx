import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Julio Novais</Text>
          <Text color="gray.300" fontSize="sm">
            julio.novais@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Julio Novais"
        src="https://avatars.githubusercontent.com/u/49425390?v=4"
      />
    </Flex>
  );
}
