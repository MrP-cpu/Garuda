const zod = require('zod');

const userSchema = zod.object({
    firstName: zod.string().min(3),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
    dob: zod.string(),
    mobile: zod.number(10)
})

const adminSchema = zod.object({
    firstName: zod.string().min(3),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
    mobile: zod.number(10),
    serviceNo: zod.number(7),
    branchNo: zod.number(7)

})

const authDataSchema = zod.object({
    aadhar: zod.number().min(10),
    mobile: zod.number(10)
})

const documetSchema = zod.object({
    aadhar: zod.number().min(10),
    mobile: zod.number(10)
})

module.exports={
    userSchema,
    adminSchema,
    authDataSchema,
    documetSchema
}