import { Typography, Container, Box } from "@material-ui/core";

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