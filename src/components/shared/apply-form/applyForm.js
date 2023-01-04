import React from 'react';
import './applyForm.scss'
import {
    Container,
    Grid,
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
const ApplyForm = () => {

    return (
        <section className="apply-form">
            <Container>
                <Grid container className="align-items-center">
                    <Grid sm={12} md={12} lg={12} item>
                        <div className="heading">
                            <h3>APPLY ONLINE</h3>
                            <p>We'll search 100's of Mortgages to get you the best deal, every time!</p>
                        </div>
                        <form className="" noValidate autoComplete="off">
                            <TextField id="" label="Name" />
                            <TextField id="" label="Phone" />
                            <TextField id="" label="Email" />
                            <FormControl className="">
                                <InputLabel id="">Mortgage request</InputLabel>
                                <Select
                                    labelId=""
                                    id=""
                                    value=""
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="" label="Amount Requested" />
                            <FormControl className="">
                                <InputLabel id="">Best time to Contact</InputLabel>
                                <Select
                                    labelId=""
                                    id=""
                                    value=""
                                >
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="I agree with terms & conditions and privacy policy"
                            />
                            <Button variant="contained" color="primary">
                                Submit
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default ApplyForm;