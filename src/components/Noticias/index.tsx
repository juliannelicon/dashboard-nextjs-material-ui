import Image from 'next/image';

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const myLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}&q=${75}`;
};

export default function Noticias() {
  return (
    <>
      <Box display="flex" flexDirection="column" sx={{ marginLeft: { lg: 2 } }}>
        <Image
          loader={myLoader}
          src="/image.jpg"
          alt="imagem"
          objectFit="cover"
          width={200}
          height={200}
        />
        <Typography fontWeight="bold" marginTop={1} marginBottom={2}>
          Digite a descrição da notícia com no máximo 1 linha
        </Typography>
      </Box>
      <List sx={{ marginLeft: { md: 2 } }}>
        <Divider variant="inset" component="li" sx={{ ml: 0 }} />
        {[1, 2, 3].map(noticia => (
          <ListItem key={noticia} disablePadding>
            <ListItem button disableGutters divider>
              <ListItemText primary="Digite a descrição da notícia com no máximo 1 linha" />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </>
  );
}
