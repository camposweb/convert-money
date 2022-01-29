import { useContext } from 'react';
import { Container, Paper, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { DateContext } from '../../context';

export function Main(){

    const { convert } = useContext(DateContext);

    return(
        <>
            <Container>
                <Paper
                    sx={{
                        
                        textAlign: 'center',
                        mt: 3,
                    }}
                >
                    {convert.map((converts, index) => {
                        return (
                            <div key={index}>
                                <Typography variant="h6">
                                    Data da Cotação: {format(new Date(converts.dataHoraCotacao), 'dd/MM/yyyy')}
                                </Typography>
                                <Typography variant="h6" >
                                    Cotação Compra: {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(converts.cotacaoCompra)}
                                </Typography>
                                <Typography variant="h6" >
                                    Cotação Venda: {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(converts.cotacaoVenda)}
                                </Typography>
                            </div>
                        )
                    })}
                </Paper>
            </Container>
        </>
    )
}
