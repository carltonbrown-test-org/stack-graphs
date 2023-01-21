/* --- path: ./my_lib/package.json --- */
/* --- global: PROJECT_NAME=my_lib --- */
{
    "name": "@my/lib",
    "version": "0.1"
}

/* --- path: ./my_lib/tsconfig.json --- */
/* --- global: PROJECT_NAME=my_lib --- */
{
}

/* --- path: ./my_lib/src/foo.ts --- */
/* --- global: PROJECT_NAME=my_lib --- */
export const bar = 42;

/* --- path: ./my_app/package.json --- */
/* --- global: PROJECT_NAME=my_app --- */
{
    "name": "@my/app"
}

/* --- path: ./my_app/tsconfig.json --- */
/* --- global: PROJECT_NAME=my_app --- */
{
}

/* --- path: ./my_app/src/index.ts --- */
/* --- global: PROJECT_NAME=my_app --- */
import { bar } from "@my/lib/foo";
//       ^ defined:
