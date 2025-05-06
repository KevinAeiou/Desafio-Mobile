import { useEffect, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TextStyle } from "react-native"

interface CampoTextoProps {
    aoDadosRecebidos: (dados: any) => void;
}

export default function CampoTexto({ aoDadosRecebidos }: CampoTextoProps) {
    const [url, setUrl] = useState<string>('');

    const fetchData = async () => {
        if(!url) return;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`)
            }
            const data = await response.json();
            console.log('Resposta da requisição: ', data);
            aoDadosRecebidos(data)
        } catch (erro) {
            console.error('Erro na requisição: ', erro);
            aoDadosRecebidos(null)
        }
    }
    const aoMudarTexto = (texto: string) => {
        setUrl(texto)
    }

    useEffect(() => {
        if(url) {
            fetchData();
            return
        }
        if(url.length === 0) {
            aoDadosRecebidos([])
        }
    }, [url]);

    const textInputProps: TextInputProps = {
        onChangeText: aoMudarTexto,
        placeholder: "Digite a url...",
        style: styles.input,
        autoFocus: true,
        selectionColor: '#6200ee',
    };
    return (
        <TextInput
            {...textInputProps}
        />
    );
}
type Styles = {
    input: TextStyle
};

const styles = StyleSheet.create<Styles> ({
    input: {
        width: '80%',
        height: 50,
        borderColor: '#6200ee',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        textAlign: 'center',
        margin: 8,
    }
})