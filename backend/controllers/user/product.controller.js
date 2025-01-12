import prisma from "../../db/connectDB.js";

const searchProduct = async (req, res) => {
  const query = req.query.q;
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              search: query,
            },
          },
          {
            ws_code: {
              search: query,
            },
          },
        ],
      },
    });

    return res.status(200).json({ data: products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export { searchProduct };