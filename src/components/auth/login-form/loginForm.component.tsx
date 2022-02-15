import * as React from 'react'; 
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

 const Login = (props: unknown) => {
    return(
        <Box  
            sx={{
                width: 500,
                height: 500,
                backgroundColor: 'primary.dark',
                justifyContent: 'center',
                alignContent: 'center'
            }}
          >
            <Grid container >
                <Grid item xs={12}>
                    <Card 
                        variant="outlined"
                        sx={{
                            width: 500,
                            height: 500,
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}>
                        <Grid item xs={12}>
                            <CardHeader />
                        </Grid>
                        <Grid item xs={12}>
                        <CardContent>
                        <Typography variant="h3">Login</Typography>
                        </CardContent>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;