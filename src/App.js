import styled from 'styled-components';
import { XMLParser, XMLBuilder, XMLValidator} from "fast-xml-parser";
import YAML from 'yaml'

function App() {

  const jsObj =
    {
      company: "Driven Education",
      ceo: "Pedrão",
      uf: "RJ",
      city: "Rio de Janeiro",
      classesQty: 6,
      classes:
        [
          {
            name: "T1",
            professor: "Pedrão1",
            studentsQty: 30,
            bestStudents: ["Adalberto", "Jurema"]
          },
          {
            name: "T2",
            professor: "Pedrão2",
            studentsQty: 60,
            bestStudents: ["Adalberto", "Jurema"]
          },
          {
            name: "T3",
            professor: "Pedrão3",
            studentsQty: 70,
            bestStudents: ["Adalberto", "Jurema"]
          },
          {
            name: "T4",
            professor: "Dina",
            studentsQty: 85,
            bestStudents:
            [
              {
                name: "Ariel",
                company: "Facebook",
                monthlyWage: 15000
              },
              {
                name: "Kayke",
                company: "Amazon",
                monthlyWage: 15000
              }, 
              {
                name: "Vitor",
                company: "Google",
                monthlyWage: 15000
              }, 
            ]
          },
          {
            name: "T5",
            professor: "Pedrão4",
            studentsQty: 120,
            bestStudents: []
          },
          {
            name: "T6",
            professor: "Pedrão5",
            studentsQty: 180,
            bestStudents: []
          },
        ],
      companyValuation: "$20M" 
    };

    console.log("\\/ JS OBJ \\/")
    console.log(jsObj);

    /*
    1 - JSON e serialização
    - #0F0 O que é serialização e deserialização? Quando precisamos usar essa técnica?
        {
            // JSON = JavaScript Object Notation
            // JSON é um formato que "criptografa" objetos em strings
            // Serialização significa converter objetos em strings
            // Deserializção significa o oposto

            
                Ao transmitir dados ou armazená-los em um arquivo, os dados
                são obrigados a ser bytes de strings, mas objetos complexos
                raramente estão neste formato. A serialização pode converter esses
                objetos complexos em bytes de strings para tal uso. Depois que as
                bytes de strings são transmitido, o receptor terá que recuperar o
                objeto original da cadeia de bytes. Isso é conhecido como
                desserialização.
            

            //Código \/

            const objeto = 
                {
                    "name": "objeto",
                    "isTest": true
                };
            console.log(objeto);

            const objetoSerializado = JSON.stringify(object);
            console.log(objetoSerializado);

            const objetoDeserializado = JSON.parse(objetoSerializado);
            console.log(objetoDeserializado);
            console.log(objeto);
        
            //FONTE: https://stackoverflow.com/questions/3316762/what-is-deserialize-and-serialize-in-json#:~:text=JSON%20is%20a%20format%20that,convert%20string%20%2D%3E%20object).
        }
    */

      const jsonObj = JSON.stringify(jsObj);
      console.log("\\/ JSON \\/")
      console.log(jsonObj);

      /*
        - #0F0 O que é e quais as regras do formato JSON?
          {
            {
            "employees":
                [
                    {"firstName":"John", "lastName":"Doe"},
                    {"firstName":"Anna", "lastName":"Smith"},
                    {"firstName":"Peter", "lastName":"Jones"}
                ]
            }

            JSON Syntax Rules
            - Os dados devem ter "nome" e "valor", sempre em pares.
                * O nome sempre deve ser string (entre aspas), já o valor não.
            
            - Os dados são separados por vírgula
            - O objeto inteiro deve estar entre chaves 
                * {"firstName":"John", "lastName":"Doe"}

            - Arrays devem estar entre colchetes
                * Arrays podem conter objetos dentro.

            //FONTE: https://www.w3schools.com/js/js_json.asp
          }
      */

      /*
          - #0F0 Como podemos converter um objeto JS em JSON e vice versa?
             Como converter?
              const objetoJson = JSON.stringify(objetoJs);
              console.log(objetoJson)

            INVERSO? Chama o parça!
              JSON.parse(objetoJson);

          //FONTE: https://www.geeksforgeeks.org/how-to-convert-js-object-to-json-string-in-jquery-javascript/
      */
  
      /*
            - #0F0 O que acontece quando serializamos objetos que tenham uma função dentro? Por quê?
            {
                undefined, Functions e Symbols não são valores JSON válidos.
                Se quaisquer desses valores forem encontrados durante a conversão,
                eles serão omitidos (quando encontrados em um objeto) ou alterados
                para nulos (quando encontrados em uma matriz). JSON.stringify() pode
                retornar undefined ao passar valores "puros" como
                JSON.stringify(function() {}) ou JSON.stringify(undefined). 


                //FONTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description
                //FONTE: https://www.json.org/json-en.html
            }

      */

      /*
            - #0F0 O que é XML? Como serializamos um objeto JS em XML?
            {
              What is XML?
              - XML stands for eXtensible Markup Language
              - XML is a markup language (Linguagem de marcação) much like HTML
              - XML was designed to store and transport data
              - HTML was designed to display data - with focus on how data looks
              - XML tags are not predefined like HTML tags are
              - XML was designed to be self-descriptive

              <note>
                  <to>Tove</to>
                  <from>Jani</from>
                  <heading>Reminder</heading>
                  <body>Don't forget me this weekend!</body>
              </note>

              XML is Extensible
              Most XML applications will work as expected even if new data is added (or removed).

              npm i fast-xml-parser

              //FONTE: https://www.w3schools.com/xml/xml_whatis.asp
            }
      */

    const builder = new XMLBuilder();
    const xmlObj = builder.build(jsObj);      
    console.log("\\/ XML \\/")
    console.log(xmlObj);

      /*
        - #0F0 O que é YAML? Como serializamos um objeto JS em YAML?
          {
              YAML ain't markup language
              .yaml ou .yml
              
              npm i Yaml
              npm i js-yaml
          
              //FONTE: https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/?utm_source=google&utm_medium=sem&utm_campaign=sem-google-dg--latam-en-dsa-maxConv-auth-nb&utm_term=g_-_c__dsa_&utm_content=&gclid=CjwKCAiA6seQBhAfEiwAvPqu1_zgKh-dkoqZNpz6CVJF_jXDb-s80NYwT0lGyb2C26A5qnX1E2JUGRoCAdMQAvD_BwE
              //FONTE: https://www.youtube.com/watch?v=JOtIVGy1SgE
          }
      */
    
    const yamlObj = YAML.stringify(jsObj);
    console.log("\\/ YAML \\/")
    console.log(yamlObj);

  return (
    <Container>
        <jsObj>
          
                {xmlObj}
            
        </jsObj>
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #FFF;

`;

const jsObj = styled.div`
  color: #000;
  font-size: 1rem;
`;