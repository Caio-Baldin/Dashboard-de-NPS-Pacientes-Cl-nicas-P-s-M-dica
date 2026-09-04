const RECORDS = [{"nota": 10, "categoria": "promotor", "data": "2026-06-10", "data_br": "10/06/2026", "hora": "10:17", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-10", "data_br": "10/06/2026", "hora": "10:21", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-10", "data_br": "10/06/2026", "hora": "10:33", "unidade": "", "feedback": "Teste 1", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-15", "data_br": "15/06/2026", "hora": "12:31", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "11:46", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento excelente ❤️ às meninas super educadas e fofas.", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "12:12", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "12:31", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Super atenciosas. Adorei o atendimento. Muita dedicação. Obrigada", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "13:05", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "14:51", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Muito bom", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "15:19", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Simplesmente incrível o atendimento, super voltaria e recomendo demais. Fui atendida pela a Dra: Gabriela Moreira que foi um amor de pessoa super atenciosa e simpática.", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "15:26", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Amei o acolhimento, atendimento maravilhoso", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "15:28", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "O atendimento foi ótimo e as pessoas foram muito educadas e gentis", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "15:36", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento especializado e qualidade  baixo custo. Recomendo sempre para todos os meus amigos e familiares.", "reacao": "positivo", "sentimento": 70.0}, {"nota": 8, "categoria": "passivo", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "15:54", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Foi bom , as meninas são bem atenciosas", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "16:06", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-16", "data_br": "16/06/2026", "hora": "16:34", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento.", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "11:45", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótima qualidade no atendimento e bons serviços, atenção e responsabilidade da melhor confiança", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "11:45", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótima qualidade no atendimento e bons serviços, atenção e responsabilidade da melhor confiança", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "11:56", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente atendimento Às médicas estão de parabéns..A começar pelo atendimento do Silvio muito educado", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "11:58", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento  excelente medicas  educadas ..recebi receitas e orientaçoes da dra Fernanda de souza amaro e alinas da dermatologia ...e terei continuidade ...e o enfermeiro da trigem e egenda  muito gentil e pontual no agendamento...so temos a agradecer!", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "12:17", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento excelente. Examina cada detalhe.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "12:43", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "As consultas são perfeitas todos muito atenciosos e cuidadosos. Estou gostando muito de faz tratamento com vcs! Já repassei pra vários amigos", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "14:51", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Buscam ajudar a encontrar soluções pra resolver o problema", "reacao": "neutro", "sentimento": 30.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "15:08", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento de excelência , super indico .", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "15:09", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente atendimento! Médicas extremamente atenciosos!", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "15:45", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Muito bom. professora incrível, todos muito atenciosos, recepcionistas, triagem, alunos. Amei", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-17", "data_br": "17/06/2026", "hora": "16:14", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Gostei muito do atendimento. Me senti bem à vontade", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-18", "data_br": "18/06/2026", "hora": "12:05", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente atendimento, profissionais atenciosas e qualificadas.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-18", "data_br": "18/06/2026", "hora": "12:39", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente tratamento dos profissionais deste unidade médica.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-18", "data_br": "18/06/2026", "hora": "13:07", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-18", "data_br": "18/06/2026", "hora": "14:26", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-19", "data_br": "19/06/2026", "hora": "12:06", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Boa recepção.  Bons médicos.", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-19", "data_br": "19/06/2026", "hora": "15:11", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Nunca tive um atendimento tão atencioso", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-19", "data_br": "19/06/2026", "hora": "16:29", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Incríveis", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-19", "data_br": "19/06/2026", "hora": "16:48", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Super atenciosos", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-20", "data_br": "20/06/2026", "hora": "12:02", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Muito bom atendimento", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-20", "data_br": "20/06/2026", "hora": "15:09", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Super atenciosos e bem explicativos nas questões ...", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-20", "data_br": "20/06/2026", "hora": "15:58", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "11:07", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Nota 10 devido a excelência do Atendimento em todas esferas do Acompanhamento médico  e do enfermeiro Silvio", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "11:12", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Valor 10 de nota . Excelente.  Médico e enfermeiro SILVIO SSO EXCELENTES", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "11:54", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente o atendimento", "reacao": "positivo", "sentimento": 80.0}, {"nota": 5, "categoria": "detrator", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "12:17", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Apesar de o atendimento ser bom e os profissionais atenciosos é tudo muito desorganizado Os atendimentos sempre são atrasados em pelo menos uma hora, mesmo com horário marcado  O transtorno da espera atrapalha o andamento da consulta e tudo fica prejudicado no final das contas", "reacao": "negativo", "sentimento": -60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "13:55", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "15:27", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Top atendimento", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "16:00", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento, muito atenciosos e dedicados", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-24", "data_br": "24/06/2026", "hora": "16:11", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-25", "data_br": "25/06/2026", "hora": "14:38", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento , a começar pelo Silvio super atencioso , prestativo . Os médicos maravilhosos.", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-25", "data_br": "25/06/2026", "hora": "15:04", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-25", "data_br": "25/06/2026", "hora": "16:08", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "O atendimento super humano, os profissionais nota 10 , muito satisfeita com tudo desde o atendimento aos procedimentos", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-25", "data_br": "25/06/2026", "hora": "16:52", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Silvio excelente profissional! Consultas com menos alunos ficam mais organizadas.", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "10:39", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento excelente, desde a triagem, professores e alunas.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "11:31", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "13:23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Teste", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "13:48", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Os médicos, atendentes e enfermeiro excelentes. Mas o agendamento fica a desejar erro em cima de erro. Várias vezes aconteceu chegar na unidade de dermatologista sem agendamento no sistema e com agendamento feito pelo WhatsApp.", "reacao": "negativo", "sentimento": -40.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "14:02", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente atendimento em todas as etapas", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "14:03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Atendimento excelente!", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "15:21", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento de excelência. Nota 10.", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "15:49", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Atendimento humanitário,  cheio de amor e gentileza,  além de muita competência", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "17:34", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Eu tenho indicado, recomendado para MUITAS pessoas,   até mesmo quando sei que elas tem convênio médico,   pois ressalto que elas podem informar pra outras pessoas.", "reacao": "positivo", "sentimento": 70.0}, {"nota": 9, "categoria": "promotor", "data": "2026-06-26", "data_br": "26/06/2026", "hora": "18:03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Minha experiência com a clínica é, de forma geral, bastante positiva, o que justifica a nota atribuída. Como sugestão de melhoria, acredito que o atendimento ao paciente por telefone/ehastsapp pode melhorar especialmente para esclarecimento de duvidas e reagendamento. Pequenos ajustes nesse aspecto certamente tornarão a experiência ainda mais satisfatória.", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-27", "data_br": "27/06/2026", "hora": "09:48", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-27", "data_br": "27/06/2026", "hora": "11:25", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento maravilhoso! Professoras e alunos com um atendimento acolhedor.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-27", "data_br": "27/06/2026", "hora": "11:52", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-06-27", "data_br": "27/06/2026", "hora": "14:17", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento excelente!", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-06-27", "data_br": "27/06/2026", "hora": "15:13", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Deixo registrado meu profundo agradecimento a toda a equipe da Mandic pela excelente experiência que tive como paciente modelo.  Em especial, quero agradecer ao enfermeiro Silvio, às colaboradoras Erica e Cris e a todos os médicos envolvidos. Vocês transformaram um momento que poderia ser apenas mais uma atividade acadêmica em uma experiência de acolhimento, respeito e cuidado genuíno.  Houve um momento em que eu não estava me sentindo bem e, antes mesmo que eu precisasse pedir ajuda, vocês perceberam minha situação e prontamente me acolheram. Recebi toda a atenção, carinho e assistência necessários, o que me fez sentir segura e muito bem cuidada.  Esse gesto fez toda a diferença e conquistou minha admiração. A competência técnica de vocês é admirável, mas o que mais me marcou foi a humanidade, a empatia e o compromisso com o bem-estar das pessoas.  Meu muito obrigada ao Silvio, à Erica, à Cris e aos médicos que participaram desse atendimento. Vocês são profissionais excepcionais e representam com excelência os valores da Mandic. Tenho enorme respeito e gratidão por cada um de vocês. Que continuem exercendo essa missão com o mesmo carinho e dedicação, pois fazem a diferença na vida de muitas pessoas. Parabéns pelo trabalho extraordinário!", "reacao": "positivo", "sentimento": 95.0}, {"nota": 9, "categoria": "promotor", "data": "2026-06-29", "data_br": "29/06/2026", "hora": "09:15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 2, "categoria": "detrator", "data": "2026-06-30", "data_br": "30/06/2026", "hora": "09:58", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Minha filha tinha uma consulta dia 30/06 as 9:30 com o pediatra, cheguei com antecedência fiquei até as 10 horas , para depois desse tempo perdido ser avisado que aquele dia o atendimento pediatra seria apenas no período da tarde. FALTA DE RESPEITO. Falaram que mandaram mensagem no sábado quando questionei, porém não chegou nada no meu celular", "reacao": "negativo", "sentimento": -80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-01", "data_br": "01/07/2026", "hora": "07:50", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Eu indico de olhos fechados: atendimento , experiência e profissionalismo com excelência ! Parabéns vocês são incríveis. Nota 10", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-01", "data_br": "01/07/2026", "hora": "12:08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "feedback": "Minha nota e 10 por que amei lugar e super indico para todos,sempre fui bem recepcionada por todos inclusive pela enfermeira Ana que dá uma atenção surreal estão de parabéns", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-07", "data_br": "07/07/2026", "hora": "13:36", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Fui bem atendida", "reacao": "neutro", "sentimento": 50.0}, {"nota": 5, "categoria": "detrator", "data": "2026-07-09", "data_br": "09/07/2026", "hora": "12:19", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo", "reacao": "positivo", "sentimento": 60.0}, {"nota": 9, "categoria": "promotor", "data": "2026-07-09", "data_br": "09/07/2026", "hora": "12:24", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Faltou luz rapidamente", "reacao": "negativo", "sentimento": -30.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-09", "data_br": "09/07/2026", "hora": "15:14", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-09", "data_br": "09/07/2026", "hora": "17:18", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Super indico  Atendimento excelente", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-10", "data_br": "10/07/2026", "hora": "15:31", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "10", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-15", "data_br": "15/07/2026", "hora": "15:17", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Dez", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-15", "data_br": "15/07/2026", "hora": "16:50", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento excelente, da recepção aos profissionais.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-23", "data_br": "23/07/2026", "hora": "17:05", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "A Emilly recepcionista é maravilhosa. Super atenciosa com os alunos e com os pacientes . Sempre receptiva e bem humorada. Adoramos !! Faz muita diferença!!", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-23", "data_br": "23/07/2026", "hora": "17:17", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Ótimo atendimento", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-24", "data_br": "24/07/2026", "hora": "14:54", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Parabéns pelo atendimento", "reacao": "positivo", "sentimento": 100.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-24", "data_br": "24/07/2026", "hora": "17:19", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-28", "data_br": "28/07/2026", "hora": "10:14", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Amei o atendimento e explicação", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-28", "data_br": "28/07/2026", "hora": "12:04", "unidade": "", "feedback": "Sempre fui bem atendido", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-28", "data_br": "28/07/2026", "hora": "17:53", "unidade": "", "feedback": "Muito bem atenciosos 他。sanaram todas a minhas duvidas", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "10:58", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "11:08", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "10", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "11:24", "unidade": "", "feedback": "Ótimo", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "11:24", "unidade": "", "feedback": "Ótimo", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "11:41", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento muito bom!", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "11:58", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "12:30", "unidade": "", "feedback": "Ótimo atendimento muito atencioso, equipe top", "reacao": "positivo", "sentimento": 85.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "14:35", "unidade": "", "feedback": "O único problema foi não ter a data para o retorno em 30 dias", "reacao": "negativo", "sentimento": -30.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "15:03", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "15:06", "unidade": "", "feedback": "Tudo muito organizado , atendimento da recepção e profissionais maravilhosos .  100% indico para pessoas que realmente querem vir . Parabéns a todo grupo", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "15:23", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento e bastante prestativo", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "17:17", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Satisfeita", "reacao": "positivo", "sentimento": 60.0}, {"nota": 9, "categoria": "promotor", "data": "2026-07-29", "data_br": "29/07/2026", "hora": "18:13", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento.", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-30", "data_br": "30/07/2026", "hora": "16:49", "unidade": "", "feedback": "Achei super atenciosos e competentes. O Dr. professor é muito cuidadoso e detalhistas, viu coisas nos meus olhos que nenhum outro médico no decorrer da minha história, não fez a metade dos exames e cuidados que tive aqui.", "reacao": "positivo", "sentimento": 85.0}, {"nota": 7, "categoria": "passivo", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "09:16", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "TESTE", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "10:18", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Evelyn é muito receptiva e educada", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "10:53", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "11:56", "unidade": "", "feedback": "Atenção,  educação  e respeito.", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "12:19", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Atendimento excelente pelo alunos, professores e funcionários. So o agendamento que tive bastante dificuldade em falar com a clinica", "reacao": "neutro", "sentimento": 40.0}, {"nota": 5, "categoria": "detrator", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "12:22", "unidade": "", "feedback": "Atendimento ótimo tanto na recepção quanto do corpo clínico", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "12:23", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Eu indicaria por que a Emily foi muito atenciosa comigo no dia da minha consulta", "reacao": "positivo", "sentimento": 70.0}, {"nota": 9, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "12:48", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Consegui o agenda da dermatologista para a harmonização com ajuda da atendente,  muito simpática e atenciosa, muito paciente. Achei muito confuso e difícil pelo telefone, deveria melhorar. Aguardo ansioso para o dia do meu atendimento. Nota 10 para a atendente, nota 2 para o agendamento", "reacao": "neutro", "sentimento": 40.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "13:57", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "15:10", "unidade": "", "feedback": "Atendimento excelente", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "17:25", "unidade": "", "feedback": "Excelente. Me senti bem cuidada", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "18:12", "unidade": "", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-07-31", "data_br": "31/07/2026", "hora": "18:14", "unidade": "", "feedback": "Profissionais bastante atenciosos e criteriosos na conduta médica. E os atendentes são simpáticos e proficientes.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-01", "data_br": "01/08/2026", "hora": "18:56", "unidade": "", "feedback": "O atendimento realizado pelo atende Augusto foi muito acolhedor .", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-03", "data_br": "03/08/2026", "hora": "14:14", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "11:50", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Todos são muito educados, o Silvio sempre muito prestativo, os profissionais são muito gentis e preparados", "reacao": "positivo", "sentimento": 80.0}, {"nota": 9, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "12:46", "unidade": "", "feedback": "O atendimento é atencioso e profissional", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "14:01", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Qualidade no atendimento", "reacao": "positivo", "sentimento": 60.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "14:03", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Os profissionais são ótimos super atenciosos  gostei  muito.", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "15:00", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "15:02", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "[removido]", "reacao": "neutro", "sentimento": 0.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "15:05", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Agradeço o atendimento na Dermatologista e na endocrinologista, que são maravilhosos. O Silvio também é muito atencio.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-06", "data_br": "06/08/2026", "hora": "20:38", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento maravilhoso, profissionais de qualidade!", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-07", "data_br": "07/08/2026", "hora": "11:17", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Bom demais", "reacao": "positivo", "sentimento": 70.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-07", "data_br": "07/08/2026", "hora": "11:50", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "São super educados e atenciosos do início ao fim, me sinto muito à vontade.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 9, "categoria": "promotor", "data": "2026-08-07", "data_br": "07/08/2026", "hora": "16:59", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-08-07", "data_br": "07/08/2026", "hora": "17:29", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 10, "categoria": "promotor", "data": "2026-08-07", "data_br": "07/08/2026", "hora": "17:30", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Todos nota 10", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-08", "data_br": "08/08/2026", "hora": "13:54", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Excelente atendimento", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-11", "data_br": "11/08/2026", "hora": "17:32", "unidade": "", "feedback": "Bom não tenho o q reclamar e sim pedir q tenha outros especialistas, para ajudar a população, deveria ter tbm residência de cirurgia plástica", "reacao": "neutro", "sentimento": 40.0}, {"nota": 5, "categoria": "detrator", "data": "2026-08-12", "data_br": "12/08/2026", "hora": "16:31", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Confirmei pelo WhatsApp minha consulta e quando compareci para ser atendida meu nome não constava no sistema e fiquei sem atendimento e também ví uma outra pessoa que estava em crise que tbm ficou sem atendimento mesmo tendo confirmado por erro do sistema", "reacao": "negativo", "sentimento": -80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-14", "data_br": "14/08/2026", "hora": "15:04", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "10 porque são muito atenciosos eu gostei muito", "reacao": "positivo", "sentimento": 80.0}, {"nota": 8, "categoria": "passivo", "data": "2026-08-16", "data_br": "16/08/2026", "hora": "01:12", "unidade": "", "feedback": "A cobrança de procedimentos acaba fazendo com que os pacientes modelo procurem alternativas em outros locais.", "reacao": "negativo", "sentimento": -40.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-17", "data_br": "17/08/2026", "hora": "12:18", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Amei o atendimento voltarei.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-17", "data_br": "17/08/2026", "hora": "14:28", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento, esclareceu muitas dúvidas", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-19", "data_br": "19/08/2026", "hora": "16:53", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Ótimo atendimento,  equipe qualificada, preços justos.", "reacao": "positivo", "sentimento": 80.0}, {"nota": 9, "categoria": "promotor", "data": "2026-08-26", "data_br": "26/08/2026", "hora": "11:47", "unidade": "QUINTAL SLM - BRASÍLIA", "feedback": "Atendimento muito bom mas a demora pra alguns atendimentos com hora marcada é frustrante", "reacao": "negativo", "sentimento": -20.0}, {"nota": 10, "categoria": "promotor", "data": "2026-08-26", "data_br": "26/08/2026", "hora": "12:47", "unidade": "", "feedback": "Fui super bem atendida pela supervisora Tainara,pelo Prof Dr Giovane e sua equipe", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-01", "data_br": "01/09/2026", "hora": "12:11", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Gostei do atendimento e do tratamento, tudo excelente", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-02", "data_br": "02/09/2026", "hora": "10:52", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "", "reacao": null, "sentimento": null}, {"nota": 9, "categoria": "promotor", "data": "2026-09-03", "data_br": "03/09/2026", "hora": "14:33", "unidade": "", "feedback": "A única ressalva é a demora no atendimento. Mesmo estando agendado, a espera geralmente é de mais de uma hora. No demais, tudo perfeito.", "reacao": "negativo", "sentimento": -30.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-03", "data_br": "03/09/2026", "hora": "16:18", "unidade": "", "feedback": "Amei o atendimento e dedicação do Dr. com seus alunos", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-03", "data_br": "03/09/2026", "hora": "16:21", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Parabéns , atendimento maravilhoso !!!!", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-03", "data_br": "03/09/2026", "hora": "16:23", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Atendimento maravilhoso, equipe super atenciosa!", "reacao": "positivo", "sentimento": 90.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-03", "data_br": "03/09/2026", "hora": "16:23", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Parabéns pelo atendimento, meninas muito simpáticas!!!", "reacao": "positivo", "sentimento": 80.0}, {"nota": 10, "categoria": "promotor", "data": "2026-09-04", "data_br": "04/09/2026", "hora": "09:34", "unidade": "QUINTAL SLM - CAMPINAS", "feedback": "Trato com as medicas de Psiquiatria desde Março. São uns anjos da guarda. Vocês todos são incríveis", "reacao": "positivo", "sentimento": 90.0}];
const WEEKLY = [{"week": "2026-06-08", "label": "08/06", "total": 3, "promotores": 3, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 10.0}, {"week": "2026-06-15", "label": "15/06", "total": 35, "promotores": 34, "passivos": 1, "detratores": 0, "nps": 97.1, "avg": 9.94}, {"week": "2026-06-22", "label": "22/06", "total": 27, "promotores": 26, "passivos": 0, "detratores": 1, "nps": 92.6, "avg": 9.78}, {"week": "2026-06-29", "label": "29/06", "total": 4, "promotores": 3, "passivos": 0, "detratores": 1, "nps": 50.0, "avg": 7.75}, {"week": "2026-07-06", "label": "06/07", "total": 6, "promotores": 5, "passivos": 0, "detratores": 1, "nps": 66.7, "avg": 9.0}, {"week": "2026-07-13", "label": "13/07", "total": 2, "promotores": 2, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 10.0}, {"week": "2026-07-20", "label": "20/07", "total": 4, "promotores": 4, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 10.0}, {"week": "2026-07-27", "label": "27/07", "total": 31, "promotores": 29, "passivos": 1, "detratores": 1, "nps": 90.3, "avg": 9.68}, {"week": "2026-08-03", "label": "03/08", "total": 15, "promotores": 15, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 9.87}, {"week": "2026-08-10", "label": "10/08", "total": 4, "promotores": 2, "passivos": 1, "detratores": 1, "nps": 25.0, "avg": 8.25}, {"week": "2026-08-17", "label": "17/08", "total": 3, "promotores": 3, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 10.0}, {"week": "2026-08-24", "label": "24/08", "total": 2, "promotores": 2, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 9.5}, {"week": "2026-08-31", "label": "31/08", "total": 8, "promotores": 8, "passivos": 0, "detratores": 0, "nps": 100.0, "avg": 9.88}];
const ATENDIMENTOS = [{"data": "2025-01-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 2}, {"data": "2025-02-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 6}, {"data": "2025-02-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 7}, {"data": "2025-02-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 1}, {"data": "2025-03-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-04-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 1}, {"data": "2025-04-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 3}, {"data": "2025-04-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-04-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-05-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-06-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 3}, {"data": "2025-06-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-06-12", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 1}, {"data": "2025-06-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 2}, {"data": "2025-07-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 4}, {"data": "2025-07-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 2}, {"data": "2025-07-10", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 1}, {"data": "2025-07-11", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 6}, {"data": "2025-07-12", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 5}, {"data": "2025-07-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-07-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 3}, {"data": "2025-07-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 2}, {"data": "2025-07-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 1}, {"data": "2025-08-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-08-07", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 1}, {"data": "2025-08-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 2}, {"data": "2025-08-08", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 4}, {"data": "2025-08-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 2}, {"data": "2025-08-09", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 3}, {"data": "2025-08-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-08-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-08-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-08-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 1}, {"data": "2025-08-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 1}, {"data": "2025-08-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 21}, {"data": "2025-09-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 48}, {"data": "2025-09-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 49}, {"data": "2025-09-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 55}, {"data": "2025-09-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2025-09-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 54}, {"data": "2025-09-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2025-09-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 51}, {"data": "2025-09-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2025-09-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 55}, {"data": "2025-09-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2025-09-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2025-09-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 12}, {"data": "2025-09-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 23}, {"data": "2025-09-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 14}, {"data": "2025-09-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2025-09-11", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 13}, {"data": "2025-09-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-09-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 25}, {"data": "2025-09-12", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2025-09-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-09-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 22}, {"data": "2025-09-13", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2025-09-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2025-09-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 23}, {"data": "2025-09-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2025-09-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 29}, {"data": "2025-09-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 23}, {"data": "2025-09-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2025-09-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2025-09-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2025-09-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 46}, {"data": "2025-09-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2025-09-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 48}, {"data": "2025-09-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 21}, {"data": "2025-09-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 49}, {"data": "2025-09-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 13}, {"data": "2025-09-25", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 12}, {"data": "2025-09-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 8}, {"data": "2025-09-26", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 14}, {"data": "2025-09-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 9}, {"data": "2025-09-27", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2025-10-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 53}, {"data": "2025-10-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 49}, {"data": "2025-10-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 52}, {"data": "2025-10-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 71}, {"data": "2025-10-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 67}, {"data": "2025-10-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 66}, {"data": "2025-10-09", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 13}, {"data": "2025-10-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 22}, {"data": "2025-10-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2025-10-10", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 19}, {"data": "2025-10-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-10-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 15}, {"data": "2025-10-11", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 17}, {"data": "2025-10-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-10-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 14}, {"data": "2025-10-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2025-10-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 20}, {"data": "2025-10-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 14}, {"data": "2025-10-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2025-10-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2025-10-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2025-10-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 43}, {"data": "2025-10-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 46}, {"data": "2025-10-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 39}, {"data": "2025-10-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 25}, {"data": "2025-10-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 25}, {"data": "2025-10-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-10-23", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 13}, {"data": "2025-10-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 38}, {"data": "2025-10-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 52}, {"data": "2025-10-24", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2025-10-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2025-10-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 55}, {"data": "2025-10-25", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2025-10-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 18}, {"data": "2025-10-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2025-10-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 14}, {"data": "2025-10-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 20}, {"data": "2025-10-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 16}, {"data": "2025-11-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 65}, {"data": "2025-11-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 58}, {"data": "2025-11-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 58}, {"data": "2025-11-06", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 9}, {"data": "2025-11-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2025-11-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 27}, {"data": "2025-11-07", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2025-11-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 13}, {"data": "2025-11-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 27}, {"data": "2025-11-08", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2025-11-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2025-11-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 23}, {"data": "2025-11-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 43}, {"data": "2025-11-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2025-11-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2025-11-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2025-11-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2025-11-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2025-11-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 23}, {"data": "2025-11-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 30}, {"data": "2025-11-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-11-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 11}, {"data": "2025-11-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 22}, {"data": "2025-11-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 18}, {"data": "2025-11-27", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 25}, {"data": "2025-11-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2025-11-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 69}, {"data": "2025-11-28", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 25}, {"data": "2025-11-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2025-11-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 67}, {"data": "2025-11-29", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 24}, {"data": "2025-11-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 16}, {"data": "2025-11-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2025-12-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2025-12-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2025-12-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2025-12-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 9}, {"data": "2025-12-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 24}, {"data": "2025-12-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 6}, {"data": "2025-12-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 25}, {"data": "2025-12-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 23}, {"data": "2025-12-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 24}, {"data": "2025-12-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 16}, {"data": "2025-12-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 14}, {"data": "2025-12-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2025-12-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 13}, {"data": "2025-12-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2025-12-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 10}, {"data": "2025-12-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 39}, {"data": "2025-12-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 26}, {"data": "2025-12-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 36}, {"data": "2025-12-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 33}, {"data": "2025-12-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2025-12-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 27}, {"data": "2025-12-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 30}, {"data": "2025-12-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 23}, {"data": "2025-12-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 21}, {"data": "2025-12-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2025-12-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 39}, {"data": "2025-12-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2025-12-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2025-12-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2025-12-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2026-01-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 16}, {"data": "2026-01-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 19}, {"data": "2026-01-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 21}, {"data": "2026-01-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2026-01-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2026-01-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 21}, {"data": "2026-01-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2026-01-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 32}, {"data": "2026-01-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 34}, {"data": "2026-01-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 14}, {"data": "2026-01-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 16}, {"data": "2026-01-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 18}, {"data": "2026-01-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 20}, {"data": "2026-01-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 11}, {"data": "2026-01-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 14}, {"data": "2026-01-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 44}, {"data": "2026-01-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 5}, {"data": "2026-01-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 51}, {"data": "2026-01-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 8}, {"data": "2026-01-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 52}, {"data": "2026-01-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 13}, {"data": "2026-01-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 21}, {"data": "2026-01-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-01-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 13}, {"data": "2026-01-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2026-01-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 32}, {"data": "2026-01-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-01-22", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 29}, {"data": "2026-01-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2026-01-22", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-01-23", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 25}, {"data": "2026-01-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-01-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 47}, {"data": "2026-01-24", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 22}, {"data": "2026-01-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 16}, {"data": "2026-01-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 41}, {"data": "2026-01-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-01-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 16}, {"data": "2026-01-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 14}, {"data": "2026-01-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 14}, {"data": "2026-01-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-01-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 11}, {"data": "2026-01-29", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-01-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 11}, {"data": "2026-01-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 41}, {"data": "2026-01-30", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-01-30", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 16}, {"data": "2026-01-30", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2026-01-31", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-01-31", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 34}, {"data": "2026-02-02", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 37}, {"data": "2026-02-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-02-03", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 38}, {"data": "2026-02-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2026-02-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-02-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-02-05", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 13}, {"data": "2026-02-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-02-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2026-02-06", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-02-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 21}, {"data": "2026-02-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 28}, {"data": "2026-02-07", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-02-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-02-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 37}, {"data": "2026-02-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 9}, {"data": "2026-02-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 7}, {"data": "2026-02-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 19}, {"data": "2026-02-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 16}, {"data": "2026-02-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-02-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 18}, {"data": "2026-02-12", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 8}, {"data": "2026-02-13", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 7}, {"data": "2026-02-14", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 9}, {"data": "2026-02-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-02-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 20}, {"data": "2026-02-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 46}, {"data": "2026-02-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 20}, {"data": "2026-02-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 36}, {"data": "2026-02-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 24}, {"data": "2026-02-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 19}, {"data": "2026-02-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 28}, {"data": "2026-02-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 19}, {"data": "2026-02-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2026-02-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-02-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 32}, {"data": "2026-02-26", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 9}, {"data": "2026-02-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 30}, {"data": "2026-02-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 44}, {"data": "2026-02-27", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-02-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 22}, {"data": "2026-02-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-02-28", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 7}, {"data": "2026-02-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-02-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 44}, {"data": "2026-03-02", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 25}, {"data": "2026-03-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 21}, {"data": "2026-03-03", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 32}, {"data": "2026-03-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 33}, {"data": "2026-03-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 11}, {"data": "2026-03-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 27}, {"data": "2026-03-05", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-03-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2026-03-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2026-03-06", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 17}, {"data": "2026-03-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 19}, {"data": "2026-03-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-03-07", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-03-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 35}, {"data": "2026-03-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-03-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2026-03-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-03-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 39}, {"data": "2026-03-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 44}, {"data": "2026-03-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-03-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2026-03-12", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 9}, {"data": "2026-03-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 9}, {"data": "2026-03-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 41}, {"data": "2026-03-13", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 8}, {"data": "2026-03-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-03-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 17}, {"data": "2026-03-14", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 8}, {"data": "2026-03-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 10}, {"data": "2026-03-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 58}, {"data": "2026-03-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-03-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2026-03-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 22}, {"data": "2026-03-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 57}, {"data": "2026-03-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2026-03-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 48}, {"data": "2026-03-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 18}, {"data": "2026-03-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2026-03-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-03-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-03-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2026-03-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-03-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 36}, {"data": "2026-03-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2026-03-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 13}, {"data": "2026-03-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2026-03-26", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 14}, {"data": "2026-03-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-03-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 64}, {"data": "2026-03-27", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 15}, {"data": "2026-03-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2026-03-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 71}, {"data": "2026-03-28", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-03-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 35}, {"data": "2026-03-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-03-30", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-03-31", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 55}, {"data": "2026-04-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 54}, {"data": "2026-04-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 14}, {"data": "2026-04-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2026-04-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2026-04-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2026-04-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 22}, {"data": "2026-04-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 36}, {"data": "2026-04-09", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 41}, {"data": "2026-04-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 46}, {"data": "2026-04-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 82}, {"data": "2026-04-10", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 40}, {"data": "2026-04-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-04-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 73}, {"data": "2026-04-11", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 48}, {"data": "2026-04-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-04-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 73}, {"data": "2026-04-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2026-04-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 34}, {"data": "2026-04-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-04-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 39}, {"data": "2026-04-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 45}, {"data": "2026-04-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 41}, {"data": "2026-04-16", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 23}, {"data": "2026-04-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-04-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 75}, {"data": "2026-04-17", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 25}, {"data": "2026-04-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 38}, {"data": "2026-04-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 77}, {"data": "2026-04-18", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 28}, {"data": "2026-04-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-04-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 80}, {"data": "2026-04-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 13}, {"data": "2026-04-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 76}, {"data": "2026-04-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-04-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 83}, {"data": "2026-04-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-04-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 71}, {"data": "2026-04-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2026-04-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 36}, {"data": "2026-04-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 43}, {"data": "2026-04-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 45}, {"data": "2026-04-29", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-04-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 42}, {"data": "2026-04-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 48}, {"data": "2026-05-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 42}, {"data": "2026-05-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-05-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 40}, {"data": "2026-05-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 39}, {"data": "2026-05-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 47}, {"data": "2026-05-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 52}, {"data": "2026-05-07", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 22}, {"data": "2026-05-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-05-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 69}, {"data": "2026-05-08", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 20}, {"data": "2026-05-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-05-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 60}, {"data": "2026-05-09", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 22}, {"data": "2026-05-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-05-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 59}, {"data": "2026-05-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-05-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 41}, {"data": "2026-05-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 35}, {"data": "2026-05-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-05-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 51}, {"data": "2026-05-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 47}, {"data": "2026-05-14", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-05-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 35}, {"data": "2026-05-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2026-05-15", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-05-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-05-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-05-16", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 8}, {"data": "2026-05-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-05-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2026-05-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 14}, {"data": "2026-05-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2026-05-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 31}, {"data": "2026-05-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-05-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 34}, {"data": "2026-05-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-05-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 39}, {"data": "2026-05-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2026-05-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-05-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2026-05-22", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 59}, {"data": "2026-05-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-05-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-05-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-05-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 47}, {"data": "2026-05-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 60}, {"data": "2026-05-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 66}, {"data": "2026-05-27", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-05-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 42}, {"data": "2026-05-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 65}, {"data": "2026-05-28", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-05-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-05-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 61}, {"data": "2026-05-29", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-05-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 16}, {"data": "2026-05-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 62}, {"data": "2026-05-30", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 14}, {"data": "2026-05-30", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2026-05-30", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2026-06-01", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2026-06-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 26}, {"data": "2026-06-02", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-06-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 28}, {"data": "2026-06-03", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2026-06-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 21}, {"data": "2026-06-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 36}, {"data": "2026-06-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 59}, {"data": "2026-06-09", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2026-06-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 52}, {"data": "2026-06-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 47}, {"data": "2026-06-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-06-11", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-06-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 37}, {"data": "2026-06-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 66}, {"data": "2026-06-12", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 8}, {"data": "2026-06-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 48}, {"data": "2026-06-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 66}, {"data": "2026-06-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-06-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 78}, {"data": "2026-06-15", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 21}, {"data": "2026-06-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2026-06-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-06-16", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 26}, {"data": "2026-06-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 30}, {"data": "2026-06-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 47}, {"data": "2026-06-17", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 27}, {"data": "2026-06-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 25}, {"data": "2026-06-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 45}, {"data": "2026-06-18", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 9}, {"data": "2026-06-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 9}, {"data": "2026-06-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 54}, {"data": "2026-06-19", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 10}, {"data": "2026-06-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 8}, {"data": "2026-06-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-06-20", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 8}, {"data": "2026-06-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-06-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 12}, {"data": "2026-06-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 19}, {"data": "2026-06-22", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-06-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 36}, {"data": "2026-06-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-06-24", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 15}, {"data": "2026-06-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-06-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 32}, {"data": "2026-06-25", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 5}, {"data": "2026-06-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2026-06-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 72}, {"data": "2026-06-26", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 6}, {"data": "2026-06-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 24}, {"data": "2026-06-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 85}, {"data": "2026-06-27", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 3}, {"data": "2026-06-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 20}, {"data": "2026-06-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 95}, {"data": "2026-06-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 22}, {"data": "2026-06-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 17}, {"data": "2026-06-30", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 46}, {"data": "2026-06-30", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-07-01", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 49}, {"data": "2026-07-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 54}, {"data": "2026-07-02", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 18}, {"data": "2026-07-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 39}, {"data": "2026-07-03", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 31}, {"data": "2026-07-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 60}, {"data": "2026-07-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 32}, {"data": "2026-07-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 49}, {"data": "2026-07-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-07-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 31}, {"data": "2026-07-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 35}, {"data": "2026-07-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2026-07-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 47}, {"data": "2026-07-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 30}, {"data": "2026-07-09", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 39}, {"data": "2026-07-09", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 68}, {"data": "2026-07-10", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 23}, {"data": "2026-07-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 74}, {"data": "2026-07-11", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 29}, {"data": "2026-07-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2026-07-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 68}, {"data": "2026-07-13", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 12}, {"data": "2026-07-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-07-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-07-14", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-07-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 30}, {"data": "2026-07-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 53}, {"data": "2026-07-15", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 13}, {"data": "2026-07-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-07-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 35}, {"data": "2026-07-16", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-07-16", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-07-16", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 66}, {"data": "2026-07-17", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 9}, {"data": "2026-07-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 36}, {"data": "2026-07-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 79}, {"data": "2026-07-18", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 7}, {"data": "2026-07-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-07-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 53}, {"data": "2026-07-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 14}, {"data": "2026-07-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 82}, {"data": "2026-07-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 41}, {"data": "2026-07-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 70}, {"data": "2026-07-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-07-22", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 68}, {"data": "2026-07-23", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-07-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 62}, {"data": "2026-07-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 32}, {"data": "2026-07-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-07-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-07-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 45}, {"data": "2026-07-27", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 11}, {"data": "2026-07-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 26}, {"data": "2026-07-28", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-07-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 20}, {"data": "2026-07-29", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 19}, {"data": "2026-07-29", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 7}, {"data": "2026-07-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 23}, {"data": "2026-07-30", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 15}, {"data": "2026-07-30", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 17}, {"data": "2026-07-30", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 58}, {"data": "2026-07-31", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 19}, {"data": "2026-07-31", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 18}, {"data": "2026-07-31", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 53}, {"data": "2026-08-01", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-08-01", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2026-08-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 65}, {"data": "2026-08-03", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 67}, {"data": "2026-08-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 38}, {"data": "2026-08-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 72}, {"data": "2026-08-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 43}, {"data": "2026-08-05", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 81}, {"data": "2026-08-05", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 45}, {"data": "2026-08-06", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 18}, {"data": "2026-08-06", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 37}, {"data": "2026-08-06", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 42}, {"data": "2026-08-07", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 16}, {"data": "2026-08-07", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 33}, {"data": "2026-08-07", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 33}, {"data": "2026-08-08", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 17}, {"data": "2026-08-08", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 27}, {"data": "2026-08-08", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-08-10", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 36}, {"data": "2026-08-10", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 51}, {"data": "2026-08-11", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-08-11", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 45}, {"data": "2026-08-12", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-08-12", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 50}, {"data": "2026-08-13", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 12}, {"data": "2026-08-13", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-08-13", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 53}, {"data": "2026-08-14", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 12}, {"data": "2026-08-14", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 43}, {"data": "2026-08-14", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 57}, {"data": "2026-08-15", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 14}, {"data": "2026-08-15", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-08-15", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 57}, {"data": "2026-08-17", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 11}, {"data": "2026-08-17", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 34}, {"data": "2026-08-17", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 54}, {"data": "2026-08-18", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 14}, {"data": "2026-08-18", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 26}, {"data": "2026-08-18", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 58}, {"data": "2026-08-19", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 14}, {"data": "2026-08-19", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 15}, {"data": "2026-08-19", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 68}, {"data": "2026-08-20", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 32}, {"data": "2026-08-20", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 77}, {"data": "2026-08-21", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 29}, {"data": "2026-08-21", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 60}, {"data": "2026-08-22", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 37}, {"data": "2026-08-22", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 67}, {"data": "2026-08-23", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 16}, {"data": "2026-08-24", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 38}, {"data": "2026-08-24", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 46}, {"data": "2026-08-25", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 51}, {"data": "2026-08-25", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 61}, {"data": "2026-08-26", "unidade": "QUINTAL SLM - BRASÍLIA", "atendimentos": 18}, {"data": "2026-08-26", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 47}, {"data": "2026-08-26", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 73}, {"data": "2026-08-27", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 57}, {"data": "2026-08-28", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 41}, {"data": "2026-08-29", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 45}, {"data": "2026-08-31", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 65}, {"data": "2026-08-31", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 54}, {"data": "2026-09-01", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 59}, {"data": "2026-09-01", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 44}, {"data": "2026-09-02", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 68}, {"data": "2026-09-02", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 40}, {"data": "2026-09-03", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 28}, {"data": "2026-09-03", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 116}, {"data": "2026-09-04", "unidade": "QUINTAL SLM - CAMPINAS", "atendimentos": 9}, {"data": "2026-09-04", "unidade": "QUINTAL SLM - CONSOLAÇÃO", "atendimentos": 17}];
function cv(name){ return getComputedStyle(document.body).getPropertyValue(name).trim(); }
const CAT_COLOR = { promotor:'--good', passivo:'--warning', detrator:'--critical' };
const CAT_LABEL = { promotor:'Promotor', passivo:'Passivo', detrator:'Detrator' };
const BAND_COLOR = { good:'--good', warning:'--warning', critical:'--critical' };
const GRANULARITY_META = {
  day:   { noun:'Dia',    tooltipPrefix:'Dia',       legend:'NPS diário',  aria:'Evolução diária do NPS' },
  week:  { noun:'Semana', tooltipPrefix:'Semana de', legend:'NPS semanal', aria:'Evolução semanal do NPS' },
  month: { noun:'Mês',    tooltipPrefix:'Mês de',    legend:'NPS mensal',  aria:'Evolução mensal do NPS' },
  year:  { noun:'Ano',    tooltipPrefix:'Ano de',    legend:'NPS anual',   aria:'Evolução anual do NPS' },
};
let currentUnit = '__all__';
let currentFbCat = '__all__';
let currentSearch = '';
let currentGranularity = 'week';
let currentOverviewGranularity = 'all';
/* ---------- helpers ---------- */
function fmtPct(n){ return (Math.round(n*10)/10).toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1}) + '%'; }
function fmtNum(n, d=1){ return n.toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}); }
function fmtSigned(n, d=1){ return (n>0?'+':'') + fmtNum(n,d); }
function fmtNpsHero(n){
  const rounded = Math.round(n*10)/10;
  const body = Number.isInteger(rounded) ? rounded.toLocaleString('pt-BR') : fmtNum(rounded,1);
  return (rounded>0?'+':'') + body;
}
function npsBand(n){ if(n>=75) return 'good'; if(n>=0) return 'warning'; return 'critical'; }
function computeStats(records){
  const total = records.length;
  const promotores = records.filter(r=>r.categoria==='promotor').length;
  const passivos = records.filter(r=>r.categoria==='passivo').length;
  const detratores = records.filter(r=>r.categoria==='detrator').length;
  const nps = total ? Math.round(((promotores/total) - (detratores/total))*1000)/10 : 0;
  const avg = total ? records.reduce((s,r)=>s+r.nota,0)/total : 0;
  return {total, promotores, passivos, detratores, nps, avg};
}
function filteredRecords(){
  return RECORDS.filter(r => currentUnit==='__all__' || r.unidade===currentUnit);
}
/* ---------- engajamento: respostas de NPS / atendimentos no mesmo período ---------- */
function globalPeriodBounds(){
  if(!RECORDS.length) return null;
  const dates = RECORDS.map(r=>r.data).sort();
  return {min: dates[0], max: dates[dates.length-1]};
}
function computeEngajamento(stats, bounds){
  if(!bounds) return null;
  const atendimentos = ATENDIMENTOS
    .filter(a => a.data>=bounds.min && a.data<=bounds.max && (currentUnit==='__all__' || a.unidade===currentUnit))
    .reduce((sum,a)=>sum+a.atendimentos, 0);
  if(!atendimentos) return null;
  return { pct: stats.total/atendimentos*100, atendimentos };
}
/* ---------- "Visão geral": instantâneo do período mais recente (dia/semana/mês/ano) ---------- */
function computeOverviewStats(){
  const recs = filteredRecords();
  if(currentOverviewGranularity==='all' || recs.length===0){
    return { records: recs, bounds: globalPeriodBounds() };
  }
  const maxDate = recs.reduce((m,r)=> r.data>m ? r.data : m, recs[0].data);
  const {key} = periodKeyAndLabel(new Date(maxDate+'T00:00:00'), currentOverviewGranularity);
  const bounds = periodRange(key, currentOverviewGranularity);
  const periodRecs = recs.filter(r => r.data>=bounds.min && r.data<=bounds.max);
  return { records: periodRecs, bounds };
}
function overviewPeriodLabel(granularity, bounds){
  if(granularity==='all' || !bounds) return '';
  const fmt = iso => new Date(iso+'T00:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'});
  if(granularity==='day') return `Mostrando: ${fmt(bounds.min)}`;
  if(granularity==='week') return `Mostrando: ${fmt(bounds.min)} – ${fmt(bounds.max)}`;
  if(granularity==='year') return `Mostrando: ${bounds.min.slice(0,4)}`;
  const d = new Date(bounds.min+'T00:00:00');
  return `Mostrando: ${d.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`;
}
/* ---------- unit select population ---------- */
function populateUnitFilter(){
  const sel = document.getElementById('unitFilter');
  const counts = {};
  RECORDS.forEach(r=>{ counts[r.unidade] = (counts[r.unidade]||0)+1; });
  const units = Object.keys(counts).sort((a,b)=>counts[b]-counts[a]);
  units.forEach(u=>{
    const opt = document.createElement('option');
    opt.value = u; opt.textContent = `${u} (${counts[u]})`;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', ()=>{ currentUnit = sel.value; renderAll(); });
}
/* ---------- tooltip ---------- */
const tooltipEl = document.getElementById('tooltip');
function showTooltip(x,y,html){
  tooltipEl.innerHTML = html;
  tooltipEl.classList.add('show');
  const rect = tooltipEl.getBoundingClientRect();
  let left = x + 14, top = y - rect.height/2;
  if(left + rect.width > window.innerWidth - 12) left = x - rect.width - 14;
  if(top < 8) top = 8;
  if(top + rect.height > window.innerHeight-8) top = window.innerHeight-8-rect.height;
  tooltipEl.style.left = left+'px'; tooltipEl.style.top = top+'px';
}
function hideTooltip(){ tooltipEl.classList.remove('show'); }
const SVGNS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs){
  const el = document.createElementNS(SVGNS, tag);
  for(const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}
/* ---------- KPI row ---------- */
function renderKpis(stats, eng){
  const row = document.getElementById('kpiRow');
  row.innerHTML = '';
  const band = npsBand(stats.nps);
  const items = [
    {hero:true, label:'NPS Score', value: fmtNpsHero(stats.nps), sub: band==='good' ? 'Zona de excelência' : band==='warning' ? 'Zona de aperfeiçoamento' : 'Zona crítica', cls:''},
    {label:'Respostas', value: stats.total.toLocaleString('pt-BR'), sub:'no período filtrado', cls:''},
    {label:'Nota média', value: fmtNum(stats.avg,2), sub:'escala 0–10', cls:''},
    {label:'Promotores', value: fmtPct(stats.total?stats.promotores/stats.total*100:0), sub:`${stats.promotores} respostas (nota 9–10)`, cls:'good'},
    {label:'Detratores', value: fmtPct(stats.total?stats.detratores/stats.total*100:0), sub:`${stats.detratores} respostas (nota 0–6)`, cls:'critical'},
    {label:'Engajamento', value: eng ? fmtPct(eng.pct) : '—', sub: eng ? `${stats.total} de ${eng.atendimentos.toLocaleString('pt-BR')} atendimentos` : 'Sem dados de atendimento no período', cls:''},
  ];
  items.forEach(it=>{
    const div = document.createElement('div');
    div.className = 'kpi' + (it.hero?' hero':'');
    div.innerHTML = `<div class="label">${it.label}</div><div class="value ${it.cls}">${it.value}</div><div class="sub">${it.sub}</div>`;
    row.appendChild(div);
  });
}
function renderOverview(){
  const { records, bounds } = computeOverviewStats();
  const stats = computeStats(records);
  const eng = computeEngajamento(stats, bounds);
  renderKpis(stats, eng);
  const labelEl = document.getElementById('overviewPeriodLabel');
  if(labelEl) labelEl.textContent = overviewPeriodLabel(currentOverviewGranularity, bounds);
}
/* ---------- donut: categoria NPS ---------- */
function renderDonut(records){
  const host = document.getElementById('donutChart');
  host.innerHTML = '';
  const total = records.length;
  const counts = {promotor:0, passivo:0, detrator:0};
  records.forEach(r=>counts[r.categoria]++);
  const W=280,H=220,cx=110,cy=110,rOuter=88,rInner=54;
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`, width:'100%', height:220, role:'img', 'aria-label':'Distribuição por categoria NPS'});
  let angle = -Math.PI/2;
  const order = ['promotor','passivo','detrator'];
  order.forEach(catKey=>{
    const val = counts[catKey];
    if(!val){ return; }
    const frac = val/total;
    const a0 = angle, a1 = angle + frac*Math.PI*2;
    angle = a1;
    const large = (a1-a0) > Math.PI ? 1 : 0;
    const x0o = cx + rOuter*Math.cos(a0), y0o = cy + rOuter*Math.sin(a0);
    const x1o = cx + rOuter*Math.cos(a1), y1o = cy + rOuter*Math.sin(a1);
    const x0i = cx + rInner*Math.cos(a1), y0i = cy + rInner*Math.sin(a1);
    const x1i = cx + rInner*Math.cos(a0), y1i = cy + rInner*Math.sin(a0);
    const d = `M${x0o},${y0o} A${rOuter},${rOuter} 0 ${large} 1 ${x1o},${y1o} L${x0i},${y0i} A${rInner},${rInner} 0 ${large} 0 ${x1i},${y1i} Z`;
    const path = svgEl('path',{d, fill:cv(CAT_COLOR[catKey])});
    path.style.cursor='pointer';
    path.addEventListener('pointermove',(e)=>{
      showTooltip(e.clientX, e.clientY, `<div class="tt-title">${CAT_LABEL[catKey]}</div><div class="tt-row"><span class="tt-key" style="background:${cv(CAT_COLOR[catKey])}"></span>${val} respostas<span class="tt-val">${fmtPct(frac*100)}</span></div>`);
    });
    path.addEventListener('pointerleave', hideTooltip);
    svg.appendChild(path);
  });
  // center label
  const t1 = svgEl('text',{x:cx,y:cy-4,'text-anchor':'middle','font-family':'var(--font-display)','font-weight':'700','font-size':'26',fill:cv('--text-primary')});
  t1.textContent = total;
  const t2 = svgEl('text',{x:cx,y:cy+16,'text-anchor':'middle','font-family':'var(--font-mono)','font-size':'10',fill:cv('--text-muted'),'letter-spacing':'.08em'});
  t2.textContent = 'RESPOSTAS';
  svg.appendChild(t1); svg.appendChild(t2);
  host.appendChild(svg);
  const legend = document.createElement('div');
  legend.className = 'legend';
  order.forEach(catKey=>{
    const val = counts[catKey];
    const pct = total ? fmtPct(val/total*100) : '0%';
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-swatch" style="background:${cv(CAT_COLOR[catKey])}"></span>${CAT_LABEL[catKey]} <b>${val}</b> (${pct})`;
    legend.appendChild(item);
  });
  host.appendChild(legend);
}
/* ---------- bar: nota distribution ---------- */
function renderNotaChart(records){
  const host = document.getElementById('notaChart');
  host.innerHTML = '';
  const counts = new Array(11).fill(0);
  records.forEach(r=> counts[r.nota]++ );
  const max = Math.max(1, ...counts);
  const W=560,H=220, padL=30, padR=10, padT=10, padB=28;
  const plotW = W-padL-padR, plotH = H-padT-padB;
  const barSlot = plotW/11;
  const barW = Math.min(24, barSlot*0.6);
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`, width:'100%', height:220, role:'img', 'aria-label':'Distribuição de notas'});
  // gridlines
  [0,0.5,1].forEach(f=>{
    const y = padT + plotH*(1-f);
    svg.appendChild(svgEl('line',{x1:padL,x2:W-padR,y1:y,y2:y,stroke:cv('--gridline'),'stroke-width':1}));
  });
  // baseline
  svg.appendChild(svgEl('line',{x1:padL,x2:W-padR,y1:padT+plotH,y2:padT+plotH,stroke:cv('--baseline'),'stroke-width':1}));
  for(let n=0;n<=10;n++){
    const val = counts[n];
    const h = (val/max)*plotH;
    const x = padL + n*barSlot + (barSlot-barW)/2;
    const y = padT+plotH-h;
    const cat = n>=9?'promotor':n>=7?'passivo':'detrator';
    const color = cv(CAT_COLOR[cat]);
    const rect = svgEl('rect',{x, y, width:barW, height:Math.max(h,val>0?2:0), rx:4, ry:4, fill:color});
    rect.style.cursor='pointer';
    rect.addEventListener('pointermove',(e)=>{
      showTooltip(e.clientX,e.clientY, `<div class="tt-title">Nota ${n}</div><div class="tt-row"><span class="tt-key" style="background:${color}"></span>${val} respostas<span class="tt-val">${records.length?fmtPct(val/records.length*100):'0%'}</span></div>`);
    });
    rect.addEventListener('pointerleave', hideTooltip);
    svg.appendChild(rect);
    const label = svgEl('text',{x:x+barW/2, y:padT+plotH+18, 'text-anchor':'middle','font-family':'var(--font-mono)','font-size':'10.5', fill:cv('--text-muted')});
    label.textContent = n;
    svg.appendChild(label);
  }
  host.appendChild(svg);
  const legend = document.createElement('div');
  legend.className = 'legend';
  legend.innerHTML = `
    <div class="legend-item"><span class="legend-swatch" style="background:${cv('--critical')}"></span>0–6 Detrator</div>
    <div class="legend-item"><span class="legend-swatch" style="background:${cv('--warning')}"></span>7–8 Passivo</div>
    <div class="legend-item"><span class="legend-swatch" style="background:${cv('--good')}"></span>9–10 Promotor</div>`;
  host.appendChild(legend);
  renderTable('notaTable', ['Nota','Respostas','% do total'],
    Array.from({length:11},(_,n)=>[n, counts[n], records.length?fmtPct(counts[n]/records.length*100):'0%']).reverse());
}
/* ---------- line: NPS trend (dia/semana/mês) ---------- */
function renderTimeChart(data, granularity){
  const meta = GRANULARITY_META[granularity];
  const host = document.getElementById('weekChart');
  host.innerHTML = '';
  if(data.length===0){ host.innerHTML='<div class="fb-empty">Sem dados suficientes para este filtro.</div>'; return; }
  const W=1040,H=260, padL=44, padR=20, padT=20, padB=34;
  const plotW=W-padL-padR, plotH=H-padT-padB;
  const minNps = Math.min(0, ...data.map(w=>w.nps));
  const maxNps = Math.max(100, ...data.map(w=>w.nps));
  const range = maxNps-minNps || 1;
  const xStep = data.length>1 ? plotW/(data.length-1) : 0;
  const maxTotal = Math.max(...data.map(w=>w.total));
  function xy(i,val){
    const x = padL + (data.length>1 ? i*xStep : plotW/2);
    const y = padT + plotH*(1-(val-minNps)/range);
    return [x,y];
  }
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`, width:'100%', height:260, role:'img', 'aria-label':meta.aria});
  // gridlines at 0,50,100 (or scaled)
  [minNps, 0, 50, 100, maxNps].filter((v,i,a)=>a.indexOf(v)===i && v>=minNps && v<=maxNps).forEach(v=>{
    const [,y] = xy(0,v);
    svg.appendChild(svgEl('line',{x1:padL,x2:W-padR,y1:y,y2:y,stroke:cv('--gridline'),'stroke-width':1}));
    const t = svgEl('text',{x:padL-8,y:y+3,'text-anchor':'end','font-family':'var(--font-mono)','font-size':'10',fill:cv('--text-muted')});
    t.textContent = Math.round(v);
    svg.appendChild(t);
  });
  // zero baseline emphasis
  if(minNps<0){
    const [,y0] = xy(0,0);
    svg.appendChild(svgEl('line',{x1:padL,x2:W-padR,y1:y0,y2:y0,stroke:cv('--baseline'),'stroke-width':1}));
  }
  // line path
  let d = '';
  data.forEach((w,i)=>{
    const [x,y] = xy(i,w.nps);
    d += (i===0?'M':'L') + x + ',' + y + ' ';
  });
  svg.appendChild(svgEl('path',{d, fill:'none', stroke:cv('--navy') || '#1A2459', 'stroke-width':2, 'stroke-linejoin':'round','stroke-linecap':'round'}));
  // points sized by response count
  data.forEach((w,i)=>{
    const [x,y] = xy(i,w.nps);
    const r = 4 + (w.total/maxTotal)*7;
    const g = svgEl('g',{});
    const ring = svgEl('circle',{cx:x,cy:y,r:r+2, fill:cv('--surface')});
    const dot = svgEl('circle',{cx:x,cy:y,r:r, fill:cv('--navy')});
    const hit = svgEl('circle',{cx:x,cy:y,r:16, fill:'transparent', style:'cursor:pointer'});
    hit.addEventListener('pointermove',(e)=>{
      showTooltip(e.clientX,e.clientY, `<div class="tt-title">${meta.tooltipPrefix} ${w.label}</div><div class="tt-row"><span class="tt-key" style="background:${cv('--navy')}"></span>NPS<span class="tt-val">${fmtSigned(w.nps,1)}</span></div><div class="tt-row" style="margin-top:2px;color:rgba(255,255,255,.6)">${w.total} respostas · média ${fmtNum(w.avg,2)}</div>`);
    });
    hit.addEventListener('pointerleave', hideTooltip);
    g.appendChild(ring); g.appendChild(dot); g.appendChild(hit);
    svg.appendChild(g);
    if(i===data.length-1){
      const lbl = svgEl('text',{x:x, y:y-r-8, 'text-anchor':'end','font-family':'var(--font-mono)','font-weight':'600','font-size':'11', fill:cv('--text-primary')});
      lbl.textContent = fmtSigned(w.nps,1);
      svg.appendChild(lbl);
    }
  });
  // x labels (sparse)
  const labelEvery = Math.ceil(data.length/8);
  data.forEach((w,i)=>{
    if(i%labelEvery!==0 && i!==data.length-1) return;
    const [x] = xy(i,minNps);
    const t = svgEl('text',{x, y:H-8, 'text-anchor':'middle','font-family':'var(--font-mono)','font-size':'10', fill:cv('--text-muted')});
    t.textContent = w.label;
    svg.appendChild(t);
  });
  host.appendChild(svg);
  const legend = document.createElement('div');
  legend.className='legend';
  legend.innerHTML = `<div class="legend-item"><span class="legend-swatch" style="background:${cv('--navy')};border-radius:50%"></span>${meta.legend} <b>·</b> tamanho do ponto = volume de respostas</div>`;
  host.appendChild(legend);
  renderTable('weekTable', [meta.noun, 'Respostas', 'NPS', 'Nota média'],
    data.slice().reverse().map(w=>[w.label, w.total, fmtSigned(w.nps,1), fmtNum(w.avg,2)]));
}
/* ---------- bar: NPS by unit ---------- */
function renderUnitChart(records){
  const host = document.getElementById('unitChart');
  host.innerHTML = '';
  const byUnit = {};
  records.forEach(r=>{
    byUnit[r.unidade] = byUnit[r.unidade] || [];
    byUnit[r.unidade].push(r);
  });
  const units = Object.keys(byUnit).sort((a,b)=>byUnit[b].length-byUnit[a].length);
  if(units.length===0){ host.innerHTML='<div class="fb-empty">Sem dados.</div>'; return; }
  const rows = units.map(u=>{
    const recs = byUnit[u];
    const s = computeStats(recs);
    return {unidade:u, ...s};
  });
  const W=560, rowH=40, padL=140, padR=96, padT=8;
  const H = padT + rows.length*rowH + 10;
  const plotW = W-padL-padR;
  const minV = Math.min(0, ...rows.map(r=>r.nps));
  const maxV = Math.max(100, ...rows.map(r=>r.nps));
  const range = maxV-minV || 1;
  const zeroX = padL + plotW*(0-minV)/range;
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`, width:'100%', height:H, role:'img','aria-label':'NPS por unidade'});
  svg.appendChild(svgEl('line',{x1:zeroX,x2:zeroX,y1:padT,y2:H-10,stroke:cv('--baseline'),'stroke-width':1}));
  rows.forEach((r,i)=>{
    const y = padT + i*rowH + rowH/2;
    const x1 = padL + plotW*((Math.min(r.nps,0))-minV)/range;
    const x2 = padL + plotW*((Math.max(r.nps,0))-minV)/range;
    const barW = Math.max(2, x2-x1);
    const color = cv(BAND_COLOR[npsBand(r.nps)]);
    const label = svgEl('text',{x:padL-10, y:y+4, 'text-anchor':'end','font-family':'var(--font-body)','font-size':'12', fill:cv('--text-primary')});
    label.textContent = r.unidade;
    svg.appendChild(label);
    const rect = svgEl('rect',{x:x1, y:y-10, width:barW, height:20, rx:4, ry:4, fill:color});
    rect.style.cursor='pointer';
    rect.addEventListener('pointermove',(e)=>{
      showTooltip(e.clientX,e.clientY, `<div class="tt-title">${r.unidade}</div><div class="tt-row"><span class="tt-key" style="background:${color}"></span>NPS<span class="tt-val">${fmtSigned(r.nps,1)}</span></div><div class="tt-row" style="margin-top:2px;color:rgba(255,255,255,.6)">${r.total} respostas · média ${fmtNum(r.avg,2)}</div>`);
    });
    rect.addEventListener('pointerleave', hideTooltip);
    svg.appendChild(rect);
    const valLabel = svgEl('text', {y:y+4, 'font-family':'var(--font-mono)','font-weight':'600','font-size':'11.5', fill:cv('--text-secondary')});
    const valText = fmtSigned(r.nps,1);
    if(r.nps>=0){ valLabel.setAttribute('x', x2+8); valLabel.setAttribute('text-anchor','start'); }
    else { valLabel.setAttribute('x', x1-8); valLabel.setAttribute('text-anchor','end'); }
    valLabel.textContent = valText + ` (n=${r.total})`;
    svg.appendChild(valLabel);
  });
  host.appendChild(svg);
  renderTable('unitTable', ['Unidade','Respostas','NPS','Nota média','Promotores','Detratores'],
    rows.map(r=>[r.unidade, r.total, fmtSigned(r.nps,1), fmtNum(r.avg,2), r.promotores, r.detratores]));
}
/* ---------- bar: reação (sentimento do comentário) ---------- */
function renderReacaoChart(records){
  const host = document.getElementById('reacaoChart');
  host.innerHTML = '';
  const withReacao = records.filter(r=>r.reacao);
  const counts = {positivo:0, neutro:0, negativo:0};
  withReacao.forEach(r=>{ if(counts[r.reacao]!==undefined) counts[r.reacao]++; });
  const total = withReacao.length;
  const colorMap = {positivo:'--good', neutro:'--warning', negativo:'--critical'};
  const labelMap = {positivo:'Positivo', neutro:'Neutro', negativo:'Negativo'};
  const order = ['positivo','neutro','negativo'];
  const max = Math.max(1,...order.map(k=>counts[k]));
  const W=460, rowH=38, padL=90, padR=60, padT=6;
  const H = padT + order.length*rowH + 8;
  const plotW = W-padL-padR;
  const svg = svgEl('svg',{viewBox:`0 0 ${W} ${H}`, width:'100%', height:H, role:'img','aria-label':'Reação dos comentários'});
  order.forEach((k,i)=>{
    const y = padT+i*rowH+rowH/2;
    const val = counts[k];
    const w = (val/max)*plotW;
    const color = cv(colorMap[k]);
    const label = svgEl('text',{x:padL-10,y:y+4,'text-anchor':'end','font-family':'var(--font-body)','font-size':'12',fill:cv('--text-primary')});
    label.textContent = labelMap[k];
    svg.appendChild(label);
    const rect = svgEl('rect',{x:padL,y:y-9,width:Math.max(w,val>0?3:0),height:18,rx:4,ry:4,fill:color});
    rect.style.cursor='pointer';
    rect.addEventListener('pointermove',(e)=>{
      showTooltip(e.clientX,e.clientY, `<div class="tt-title">${labelMap[k]}</div><div class="tt-row"><span class="tt-key" style="background:${color}"></span>${val} comentários<span class="tt-val">${total?fmtPct(val/total*100):'0%'}</span></div>`);
    });
    rect.addEventListener('pointerleave', hideTooltip);
    svg.appendChild(rect);
    const vLabel = svgEl('text',{x:padL+w+8,y:y+4,'font-family':'var(--font-mono)','font-size':'11.5',fill:cv('--text-secondary')});
    vLabel.textContent = `${val} (${total?fmtPct(val/total*100):'0%'})`;
    svg.appendChild(vLabel);
  });
  host.appendChild(svg);
  const note = document.createElement('div');
  note.className='legend';
  note.innerHTML = `<div class="legend-item">Baseado em ${total} de ${records.length} respostas com comentário classificado</div>`;
  host.appendChild(note);
}
/* ---------- generic table renderer ---------- */
function renderTable(hostId, headers, rows){
  const host = document.getElementById(hostId);
  const table = document.createElement('table');
  table.className = 'data-table';
  const thead = document.createElement('thead');
  const trh = document.createElement('tr');
  headers.forEach(h=>{ const th=document.createElement('th'); th.textContent=h; trh.appendChild(th); });
  thead.appendChild(trh); table.appendChild(thead);
  const tbody = document.createElement('tbody');
  rows.forEach(r=>{
    const tr = document.createElement('tr');
    r.forEach(v=>{ const td=document.createElement('td'); td.textContent=v; tr.appendChild(td); });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  host.innerHTML='';
  host.appendChild(table);
}
/* ---------- feedback list ---------- */
function renderFeedback(records){
  const list = document.getElementById('fbList');
  list.innerHTML = '';
  let items = records.filter(r=>r.feedback && r.feedback.trim());
  if(currentFbCat !== '__all__') items = items.filter(r=>r.categoria===currentFbCat);
  if(currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    items = items.filter(r=>r.feedback.toLowerCase().includes(q));
  }
  items = items.slice().sort((a,b)=> (a.data+a.hora) < (b.data+b.hora) ? 1 : -1);
  document.getElementById('fbCount').textContent = `${items.length} comentário(s)`;
  if(items.length===0){
    list.innerHTML = '<div class="fb-empty">Nenhum comentário encontrado para este filtro.</div>';
    return;
  }
  items.forEach(r=>{
    const row = document.createElement('div');
    row.className='fb-item';
    const badge = document.createElement('div');
    badge.className='fb-badge';
    badge.style.background = cv(CAT_COLOR[r.categoria]);
    badge.textContent = r.nota;
    const body = document.createElement('div');
    body.className='fb-body';
    const meta = document.createElement('div');
    meta.className='fb-meta';
    const unidadeSpan = document.createElement('span');
    unidadeSpan.className='unidade'; unidadeSpan.textContent = r.unidade;
    const dateSpan = document.createElement('span'); dateSpan.textContent = r.data_br;
    const catSpan = document.createElement('span'); catSpan.textContent = CAT_LABEL[r.categoria];
    meta.appendChild(unidadeSpan); meta.appendChild(document.createTextNode('·')); meta.appendChild(dateSpan);
    meta.appendChild(document.createTextNode('·')); meta.appendChild(catSpan);
    const text = document.createElement('div');
    text.className='fb-text';
    text.textContent = r.feedback;
    body.appendChild(meta); body.appendChild(text);
    row.appendChild(badge); row.appendChild(body);
    list.appendChild(row);
  });
}
/* ---------- table toggles ---------- */
document.querySelectorAll('.table-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.dataset.target);
    const showing = target.style.display !== 'none';
    target.style.display = showing ? 'none' : 'block';
    btn.textContent = showing ? 'Ver tabela' : 'Ocultar tabela';
  });
});
/* ---------- feedback controls ---------- */
document.querySelectorAll('.fb-controls .fb-chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.fb-controls .fb-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentFbCat = chip.dataset.cat;
    renderFeedback(filteredRecords());
  });
});
/* ---------- time chart granularity controls ---------- */
document.querySelectorAll('#timeGranularity .fb-chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('#timeGranularity .fb-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentGranularity = chip.dataset.granularity;
    renderTimeChart(periodForUnit(currentGranularity), currentGranularity);
  });
});
/* ---------- overview (Visão geral) granularity controls ---------- */
document.querySelectorAll('#overviewGranularity .fb-chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('#overviewGranularity .fb-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentOverviewGranularity = chip.dataset.granularity;
    renderOverview();
  });
});
document.getElementById('fbSearch').addEventListener('input', (e)=>{
  currentSearch = e.target.value;
  renderFeedback(filteredRecords());
});
/* ---------- theme toggle ---------- */
document.getElementById('themeToggle').addEventListener('click', ()=>{
  const root = document.documentElement;
  const cur = root.getAttribute('data-theme');
  let next;
  if(!cur){ next = (window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'light' : 'dark'; }
  else if(cur==='dark'){ next='light'; } else { next='dark'; }
  root.setAttribute('data-theme', next);
  renderAll();
});
/* ---------- time-series aggregation (dia/semana/mês), filtered by unit ---------- */
const MESES_ABREV = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
function pad2(n){ return String(n).padStart(2,'0'); }
function periodKeyAndLabel(d, granularity){
  if(granularity==='day'){
    const key = `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
    return {key, label: d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})};
  }
  if(granularity==='month'){
    const key = `${d.getFullYear()}-${pad2(d.getMonth()+1)}-01`;
    return {key, label: `${MESES_ABREV[d.getMonth()]}/${String(d.getFullYear()).slice(-2)}`};
  }
  if(granularity==='year'){
    const key = `${d.getFullYear()}-01-01`;
    return {key, label: String(d.getFullYear())};
  }
  // week: segunda-feira como início (mesma lógica usada no pipeline Python)
  const day = (d.getDay()+6)%7; // Mon=0
  const monday = new Date(d); monday.setDate(d.getDate()-day);
  const key = monday.toISOString().slice(0,10);
  return {key, label: monday.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})};
}
/* devolve os limites de calendário (AAAA-MM-DD) do período que contém `key` */
function periodRange(key, granularity){
  const [y,m,day] = key.split('-').map(Number);
  if(granularity==='day') return {min:key, max:key};
  if(granularity==='week'){
    const end = new Date(y, m-1, day+6);
    return {min:key, max:`${end.getFullYear()}-${pad2(end.getMonth()+1)}-${pad2(end.getDate())}`};
  }
  if(granularity==='month'){
    const lastDay = new Date(y, m, 0).getDate();
    return {min:key, max:`${y}-${pad2(m)}-${pad2(lastDay)}`};
  }
  if(granularity==='year') return {min:key, max:`${y}-12-31`};
}
function aggregateByPeriod(records, granularity){
  const byKey = {};
  const labelByKey = {};
  records.forEach(r=>{
    const d = new Date(r.data+'T00:00:00');
    const {key, label} = periodKeyAndLabel(d, granularity);
    byKey[key] = byKey[key] || [];
    byKey[key].push(r);
    labelByKey[key] = label;
  });
  const keys = Object.keys(byKey).sort();
  return keys.map(k=>{
    const s = computeStats(byKey[k]);
    return {period:k, label:labelByKey[k], total:s.total, promotores:s.promotores, passivos:s.passivos, detratores:s.detratores, nps:s.nps, avg:Math.round(s.avg*100)/100};
  });
}
function periodForUnit(granularity){
  if(granularity==='week' && currentUnit==='__all__') return WEEKLY;
  return aggregateByPeriod(filteredRecords(), granularity);
}
/* ---------- period meta (derived from data, no manual sync needed) ---------- */
function renderPeriodMeta(){
  if(!RECORDS.length) return;
  const dates = RECORDS.map(r=>r.data).sort();
  const fmt = iso => new Date(iso+'T00:00:00').toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}).replace('.','');
  const periodText = `${fmt(dates[0])} – ${fmt(dates[dates.length-1])}`;
  const periodEl = document.getElementById('periodLabel');
  const lastEl = document.getElementById('lastUpdate');
  const footPeriodEl = document.getElementById('footPeriodLabel');
  const totalEl = document.getElementById('totalResponses');
  if(periodEl) periodEl.textContent = periodText;
  if(lastEl) lastEl.textContent = fmt(dates[dates.length-1]);
  if(footPeriodEl) footPeriodEl.textContent = periodText;
  if(totalEl) totalEl.textContent = RECORDS.length.toLocaleString('pt-BR');
}
/* ---------- unit badge: mostra a unidade filtrada perto do título de cada seção ---------- */
function updateUnitBadges(){
  const active = currentUnit !== '__all__';
  document.querySelectorAll('[data-unit-badge]').forEach(el=>{
    el.textContent = active ? currentUnit : '';
    el.classList.toggle('show', active);
  });
}
/* ---------- render orchestration ---------- */
function renderAll(){
  const recs = filteredRecords();
  document.getElementById('resultCount').textContent = `${recs.length} de ${RECORDS.length} respostas`;
  updateUnitBadges();
  renderOverview();
  renderDonut(recs);
  renderNotaChart(recs);
  renderTimeChart(periodForUnit(currentGranularity), currentGranularity);
  renderUnitChart(recs);
  renderReacaoChart(recs);
  renderFeedback(recs);
}
populateUnitFilter();
renderPeriodMeta();
renderAll();