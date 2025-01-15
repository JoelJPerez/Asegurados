using System.ComponentModel.DataAnnotations;

namespace Asegurados.Models
{
    public class Asegurado
    {
        public int NumeroIdentificacion { get; set; } // PK
        public required string PrimerNombre { get; set; }
        public required string SegundoNombre { get; set; }
        public required string PrimerApellido { get; set; }
        public required string SegundoApellido { get; set; }
        public required string TelefonoContacto { get; set; }
        public required string Email { get; set; }
        public required DateTime FechaNacimiento { get; set; }
        public required decimal ValorEstimadoSeguro { get; set; }
        public string? Observaciones { get; set; }
    }
}