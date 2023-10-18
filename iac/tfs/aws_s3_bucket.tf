resource "aws_s3_bucket" "mybucket" {
    # o que quero configurar (nome do recurso) + nome do meu bucket no aws
  bucket = "mybucket"
  tags = {
    "environment" = "dev"
  }
}
