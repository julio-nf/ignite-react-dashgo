import { ReactNode } from 'react';
import { Box, Link, Stack, Text, Icon } from '@chakra-ui/react';
import { RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="sm">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}