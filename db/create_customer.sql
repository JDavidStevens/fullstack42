insert into fullstack42
(customer_name, customer_auth_id, customer_picture, customer_email)
values($1,$2,$3,$4)
returning *;