



#POST Documento financeiro
curl -d '{
"titulo": "Relatório Q1 2024",
"conteudo": "Relatório financeiro do primeiro trimestre de 2024.",
"tipo": "financeiro",
"financeiro": {
  "valor": 50000,
  "departamento": "Financeiro",
  "data": "2024-03-31"
  }
}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/documentos]


#POST Documento academico
curl -d '{
	"titulo": "Estudo sobre Inteligência Artificial",
	"conteudo": "Exploração das novas tendências em IA.",
	"tipo": "academico",
	"academico": {
			"autor": "Dr. João Silva",
			"areaEstudo": "Inteligência Artificial",
			"doi": "10.1234/ai.2023.001"
		}
} -H "Content-Type: application/json" -X POST http://localhost:3000/api/documentos