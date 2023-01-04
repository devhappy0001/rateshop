import React from 'react';
import LinearStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box, Grid } from "@material-ui/core";
import './QuickApp.scss';
const QuickApp = () => {
  return (
    <>
      <section className='quick-com-parent'>
        <Container component={Box} className="quick-container">
            <div className='quick-inner'>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12} item  className="cs-p0">
                        <LinearStepper />
                    </Grid>
                </Grid>
            </div>
        </Container>
      </section>
    </>
  );
}

export default QuickApp;