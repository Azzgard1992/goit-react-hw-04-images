import { Box } from 'components/Box/Box';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box width="100px" mx="auto">
      <Oval color="#4169E1" height={100} width={100} />
    </Box>
  );
};
