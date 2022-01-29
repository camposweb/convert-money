import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

interface Convert {
    cotacaoCompra: number;
    cotacaoVenda: number;
    dataHoraCotacao: string;
};

interface ConvertProps {
    children: ReactNode;
}

interface DateContextData {
    convert: Convert[];
    //date: string;
    newDate: string;
    setNewDate: Dispatch<SetStateAction<string>>;
    //fNewDate: (data: DateInput) => void;
}

type DateInput = string;
//type DateInput = Pick<Convert, 'dataHoraCotacao'>;

export const DateContext = createContext<DateContextData>(
    {} as DateContextData
    );

export function DateProvider({children}: ConvertProps){
    
    const [newDate, setNewDate] = useState(format(new Date(), 'MM-dd-yyyy'));
    const [convert, setConvert] = useState<Convert[]>([]);

    useEffect(() => {
        axios.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${newDate}'`)
            .then(response => {
                setConvert(response.data.value)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });
    }, [newDate])

    /* function fNewDate(dateInput: DateInput){
        setNewDate(newDate)
    } */

    return (
        <DateContext.Provider value={{ convert, newDate, setNewDate }}>
            {children}
        </DateContext.Provider>
    )
}
