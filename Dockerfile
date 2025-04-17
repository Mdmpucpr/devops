# Usa o Nginx como servidor web
FROM nginx:alpine

# Remove arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do projeto para o diretório de publicação do Nginx
COPY index.html style.css app.js /usr/share/nginx/html/

# Expõe a porta 80 (HTTP)
EXPOSE 80

# Comando para manter o Nginx rodando
CMD ["nginx", "-g", "daemon off;"]
