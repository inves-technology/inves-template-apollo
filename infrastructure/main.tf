terraform {
  backend "s3" {
    bucket               = "inves-technology-terraform-state"
    workspace_key_prefix = "environments"
    key                  = "inves-template-apollo"
    region               = "af-south-1"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.18"
    }
  }
  required_version = ">= 1.2.2"
}

provider "aws" {
  region = "af-south-1"
}

module "inves-template-apollo-lambda" {
  source                     = "terraform-aws-modules/lambda/aws"
  function_name              = "inves-template-apollo-${terraform.workspace}"
  description                = "Hello World Apollo Lambda - ${terraform.workspace}"
  handler                    = "./src/app-lambda.handler"
  runtime                    = "nodejs18.x"
  create_lambda_function_url = true
  create_package             = false
  local_existing_package     = "../build/deploy.zip"
  environment_variables = {
    STAGE   = terraform.workspace
    PROJECT = "inves-template-apollo-${terraform.workspace}"
  }
  tags = {
    "env" = terraform.workspace
  }
}

output "lambda-url" {
  value = module.inves-template-apollo-lambda.lambda_function_url
}
