import BrandService from "../../services/brandService";

export default async (req, res) => {
  try {
    // here wil the code of the persmission
    // and here will be the code of transfer data
    // here will be the code of handling success message
    const payload = await new BrandService().create(req.body.data);
  } catch (error) {
    // here will be the code of handling error message
  }
};
