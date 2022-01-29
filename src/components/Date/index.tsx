import { useState, useContext, FormEvent } from 'react';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { format } from 'date-fns'
import { Container } from '@mui/material';
import { DateContext } from '../../context';

export function Date(){

    const { newDate, setNewDate } = useContext(DateContext);

    function handleDate(newValue: any){
        setNewDate(format(newValue, 'MM-dd-yyyy'))
    }

    console.log(newDate)

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Container>
                    <Stack
                        sx={{
                            mt: 3,
                        }}
                    >
                        <MobileDatePicker
                            label="Selecione a data da cotação"
                            inputFormat="dd/MM/yyyy"
                            value={newDate}
                            onChange={handleDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </Container>
            </LocalizationProvider>
        </>
    )
}