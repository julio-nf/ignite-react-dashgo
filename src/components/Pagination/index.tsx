import { Box, Stack, Text } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page) => void;
}

const siblingsCounts = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => from + index + 1).filter((page) => page > 0);
}
export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCounts, currentPage - 1) : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCounts, lastPage))
      : [];

  return (
    <Stack direction={['column', 'row']} mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <Text as="strong">0</Text> - <Text as="strong">10</Text> de <Text as="strong">100</Text>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCounts && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCounts && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          ))}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          ))}

        {currentPage + siblingsCounts < lastPage && (
          <>
            {currentPage + 1 + siblingsCounts < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
