export const validateProduct = (product) => {
  const errors = {};

  if (!product.title || product.title.trim().length === 0) {
    errors.title = "El título es obligatorio.";
  }

  if (!product.price || isNaN(product.price) || product.price <= 0) {
    errors.price = "El precio debe ser un número mayor a 0.";
  }

  if (!product.category || product.category.trim().length === 0) {
    errors.category = "La categoría es obligatoria.";
  }

  if (!product.description || product.description.trim().length === 0) {
    errors.description = "La descripción es obligatoria.";
  } else if (product.description.trim().length < 10) {
    errors.description = "La descripción debe tener al menos 10 caracteres.";
  }

  if (!product.file) {
    errors.file = "La imagen es obligatoria.";
  }

  return errors;
};
