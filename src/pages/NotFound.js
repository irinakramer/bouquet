import { Typography, Container, Box } from "@mui/material";

const NotFound = () => {
    return (
        <Container maxWidth="sm">
            <Box p={3}>
                <Typography variant="h2" component="h1">
                    Page not found
                </Typography>
            </Box>           
        </Container>
    )
}

export default NotFound;